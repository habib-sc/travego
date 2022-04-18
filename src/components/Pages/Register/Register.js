import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import './Register.css';

const Register = () => {
    // User Information hook 
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
    });


    // Auth user hook - React Firebase Hooks 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // Handling Inputs 
    const handleName = e => {
        setUserInfo({ ...userInfo, name: e.target.value });
    }
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
    const handleConfirmPassword = e => {
        if (userInfo.password === e.target.value){
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({...errors, confirmPasswordError: ""});
        }else{
            setErrors({...errors, confirmPasswordError: "Password don't match!"});
        }
    }

    const navigate = useNavigate();

    // Handling Sign up form on submit 
    const handleSignUpForm = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);   
    }
    
    // Handle Google Authentication 
    const handleGoogleAuth = () => {
        signInWithGoogle();
        navigate('/');
    }



    // Handling Register errors 
    useEffect( () => {
        if (error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid Email!");
                    break;
                case "auth/email-already-in-use":
                    toast("Account already exist with this email.");
                    break;
                default:
                    toast(error?.code);
                    break;
            }
        }
    }, [error]);

    if (user) {
        navigate('/');
    }

    return (
        <div>
            {loading &&
                <Spinner></Spinner>
            }
            <div className='text-center mt-3'>
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSignUpForm} className='d-flex flex-column w-25 mx-auto mt-4'>
                <input onChange={handleName} type="text" name='name' placeholder='Name' className='tg-form-input my-2 border-0 rounded-3' />
                <input onChange={handleEmail} type="email" name='email' placeholder='Email' required className='tg-form-input my-2 border-0 rounded-3' />
                {errors.emailError && 
                <p className='tg-input-error'>{errors.emailError}</p>
                }
                <input onChange={handlePassword} type="password" name='password' placeholder='Password' required className='tg-form-input my-2 border-0 rounded-3' />
                {errors.passwordError && 
                <p className='tg-input-error'>{errors.passwordError}</p>
                }
                <input onChange={handleConfirmPassword} type="password" name='confirm-password' required placeholder='Confirm Password' className='tg-form-input my-2 border-0 rounded-3' />
                {errors.confirmPasswordError && 
                <p className='tg-input-error'>{errors.confirmPasswordError}</p>
                }
                <button className='tg-submit-btn btn btn-primary border-0 mt-2'>Sign Up</button>
                <p className='mt-2 mb-3'>Allready have an account? <Link to='/login'>Sign in heare</Link></p>
            </form>
             
             <div className="d-flex flex-column w-25 mx-auto mb-5 pb-5">
                 <h4 className='text-center fw-semi-bold'>OR</h4>
                 <hr />
                <button onClick={() => handleGoogleAuth()} className='tg-submit-btn btn btn-primary border-0 mt-2'>Continue With Google</button>
             </div>
             <ToastContainer />
        </div>
    );
};

export default Register;