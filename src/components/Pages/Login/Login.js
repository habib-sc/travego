import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {

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

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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
        navigate('/');
    }

    return (
        <div>
            <div className='text-center mt-3'>
                <h2>Login</h2>
            </div>
            <form onSubmit={handleLoginForm} className='d-flex flex-column w-25 mx-auto mt-4'>
                <input onChange={handleEmail} type="email" name='email' placeholder='Email' className='tg-form-input my-2 border-0 rounded-3' />
                {errors.emailError && 
                <p className='tg-input-error'>{errors.emailError}</p>
                }
                <input onChange={handlePassword} type="password" name='password' placeholder='Password' className='tg-form-input my-2 border-0 rounded-3' />
                {errors.passwordError && 
                <p className='tg-input-error'>{errors.passwordError}</p>
                }
                <button className='tg-submit-btn btn btn-primary border-0 mb-5 mt-2'>Log In</button>
            </form>
        </div>
    );
};

export default Login;