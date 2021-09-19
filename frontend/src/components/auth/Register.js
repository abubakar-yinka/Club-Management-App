import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { register } from '../../store/actions/auth'

import registerImage from '../../assets/images/register.svg';
import './Auth.scss';

const Register = ({ history }) => {

    const dispatch = useDispatch()

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ gender, setGender ] = useState('male')

    const submitForm = e => {
        e.preventDefault()

        const newUser = { firstName, lastName, email, password, gender }

        dispatch(register(newUser, history))

    }

    return (
        <div id = 'auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='Register'></img>
                    </div>
                    <div id='form-section'>
                        <h1>Create an account</h1>
                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input 
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder='First Name' 
                                    value={firstName}
                                    required='required'
                                    type='text'
                                />
                            </div>
                            <div className='input-field mb-1'>
                                <input 
                                    onChange={e => setLastName(e.target.value)}
                                    placeholder='Last Name' 
                                    value={lastName}
                                    required='required'
                                    type='text'
                                />
                            </div>
                            <div className='input-field mb-1'>
                                <input 
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Email' 
                                    value={email}
                                    required='required'
                                    type='text'
                                />
                            </div>
                            <div className='input-field mb-2'>
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Password' 
                                    value={password}
                                    required='required'
                                    type='password'
                                />
                            </div>
                            <div className='input-field mb-1'>
                                <select
                                    onChange={e => setGender(e.target.value)}
                                    value={gender}
                                    required='required'>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                </select>
                            </div>
                            <button>Register</button>

                            <p>Already have an account? <Link to='/login'>Login</Link> here!</p> 
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;
