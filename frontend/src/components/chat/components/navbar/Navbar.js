import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../../../store/actions/auth";
import { updateProfile } from "../../../../store/actions/auth";

import './Navbar.scss'
import Modal from '../../../modal/Modal';

const Navbar = () => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.authReducer.user)

    const [ firstName, setFirstName ] = useState(user.firstName)
    const [ lastName, setLastName ] = useState(user.lastName)
    const [ email, setEmail ] = useState(user.email)
    const [ password, setPassword ] = useState('')
    const [ gender, setGender ] = useState('male')
    const [ avatar, setAvatar ] = useState('')
    const [ showProfileOptions, setShowProfileOptions ] = useState(false)
    const [ showProfileModal, setShowProfileModal ] = useState(false)

    const submitForm = e => {
        e.preventDefault()

        const form = { firstName, lastName, email, gender, avatar }
        if (password.length > 0) form.password = password

        const formData = new FormData()

        for (const key in form) {
            formData.append(key, form[key])
        }

        //Dispatch an action
        dispatch(updateProfile(formData)).then(() => setShowProfileModal(false))
        

    }

    return (
        <div id='navbar' className='card-shadow'>
            <h2>Club Management App</h2>
            <div onClick={() => setShowProfileOptions(!showProfileOptions)} id="profile-menu">
                <img src={user.avatar} alt='Avatar'></img>
                <p>{user.firstName} {user.lastName}</p>
                <FontAwesomeIcon icon='caret-down' className='fa-icon'/>

                {
                    showProfileOptions &&
                        <div id='profile-options'>
                            <p onClick={() => setShowProfileModal(true)}>Update Profile</p>
                            <p onClick={() => dispatch(logout())}>Logout</p>
                        </div>
                }

                {
                    showProfileModal &&
                        <Modal click={() => setShowProfileModal(false)}>
                            <Fragment key='header'>
                                <h3 className='m-0'>Update Profile</h3>
                            </Fragment>
                            <Fragment key='body'>
                                <form>
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
                                    <div className='input-field mb-2'>
                                        <input 
                                            onChange={e => setAvatar(e.target.files[0])}
                                            type='file'
                                        />
                                    </div>

                                </form>
                            </Fragment>
                            <Fragment key='footer'>
                                <button onClick={submitForm} className='btn-sucess'>Update</button>
                            </Fragment>
                        </Modal>
                }
            </div>
        </div>
    )
}

export default Navbar
