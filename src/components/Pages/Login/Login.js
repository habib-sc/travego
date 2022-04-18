import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleIcon from '../../../assets/icons/google.png';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

const Login = () => {

    // Getting auth & navigation info for navigate after login
    const [userAuth] = useAuthState(auth);
    const navigate = useNavigate(); 
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // User Information hook 
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        hookError: ''
    });

    // React Firebase hooks 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
    

    // Handle Inputs 
    const handleEmail = e => {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const validEmail = emailRegEx.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({...errors, emailError: ''})
        }else{
            setErrors({...errors, emailError: 'Invalid Email!'});
        }
    }
    const handlePassword = e => {
        const passwordRegEx = /.{6,}/;
        const validPassword = passwordRegEx.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({...errors, passwordError: ''});
        }else{
            setErrors({...errors, passwordError: 'At least 6 character required!'})
        }
    }

    // Handling Sign In form on submit 
    const handleLoginForm = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    // Handling Login errors 
    useEffect( () => {
        if (error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid Email!");
                    break;
                case "auth/wrong-password":
                    toast("Wrong Password!");
                    break;
                case "auth/user-not-found":
                    toast("No account found with this email.");
                    break;
                case "auth/too-many-requests":
                    toast("You have been blocked temporery for Too Many Requests!");
                    break;
                default:
                    toast(error?.code);
                    break;
            }
        }
    }, [error]);

    if (userAuth) {
        // Navigating where user come from 
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Spinner></Spinner>;
    }

    // Handle Google Authentication 
    const handleGoogleAuth = () => {
        signInWithGoogle();
    }

    // Handle Reset Password 
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(userInfo.email);
        toast("Password Reset Email Sent!");
    }

    return (
        <div>
            <div className='text-center mt-3'>
                <h2>Login</h2>
            </div>
            <form onSubmit={handleLoginForm} className='d-flex flex-column w-25 mx-auto mt-4'>
                <input onChange={handleEmail} type="email" name='email' placeholder='Email' required className='tg-form-input my-2 border-0 rounded-3' />
                {errors.emailError && 
                <p className='tg-input-error'>{errors.emailError}</p>
                }
                <input onChange={handlePassword} type="password" name='password' placeholder='Password' required className='tg-form-input my-2 border-0 rounded-3' />
                {errors.passwordError && 
                <p className='tg-input-error'>{errors.passwordError}</p>
                }
                <button className='tg-submit-btn btn btn-primary border-0 mt-2'>Log In</button>
                <p className='mt-2 mb-0'>Don't have an account? <Link to='/register'>Create a new account</Link></p>
                <p onClick={handleResetPassword} className='mt-0 mb-5 tg-link' to='/'>Forgot Password?</p>
            </form>

            <div className="d-flex flex-column w-25 mx-auto mb-5 pb-5">
                 <h4 className='text-center fw-semi-bold'>OR</h4>
                 <hr />
                <button onClick={() => handleGoogleAuth()} className='tg-submit-btn btn btn-primary border-0 mt-2 d-flex justify-content-center align-items-center'>
                    <img src={googleIcon} className="mx-2 rounded-circle" alt="" />
                    Continue With Google
                </button>
             </div>
             <ToastContainer />
        </div>
    );
};

export default Login;