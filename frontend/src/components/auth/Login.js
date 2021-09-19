import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import AuthService from '../../services/authService';


import { useDispatch } from "react-redux";
import { login } from '../../store/actions/auth'

import loginImage from '../../assets/images/login.svg';
import './Auth.scss';

const Login = ({ history }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('janedoe@gmail.com')
    const [password, setPassword] = useState('1234')

    const submitForm = e => {
        e.preventDefault()

        dispatch(login({ email, password }, history))

        // AuthService.login({ email, password }).then(res => console.log(`Response: ${JSON.stringify(res)}`))

        // axios.post('http://127.0.0.1:3000/login', { email, password})
        //     .then(res => {
        //         dispatch(login(res.data, history))
        //     })
        //     .catch(err => console.log('error:', err))

        // console.log({email, password})
    }

    return (
        <div id = 'auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt='Login'></img>
                    </div>
                    <div id='form-section'>
                        <h1>Welcome back</h1>
                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input 
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Email' 
                                    value={email}
                                    required
                                    type='text'
                                />
                            </div>
                            <div className='input-field mb-2'>
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Password' 
                                    value={password}
                                    required
                                    type='password'
                                />
                            </div>
                            <button>Login</button>

                            <p>Already have an account? <Link to='/register'>Register</Link> here!</p> 
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
