import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Register = () => {
    const [newUser, setNewUser] = useState({
        Fname: '',
        Lname: '',
        email: '',
        password: '',
        confPassword: ''
    })

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    }

    //useEffect makes posting request possible with backend.
    useEffect(() => {
        axios
            .get('https://heroku.com/water-my-plant-pt34.git')
            .then(res => {
            console.log(res)
            })
            .catch(err => {
            console.log('there was an error with axios request', err)
        })
    })
    return (
        <div>
            <form className='form'>
                <label>
                    <input
                        className='label formfield'
                        name='Fname'
                        type='text'
                        value={newUser.Fname}
                        onChange={handleChange}
                    placeholder='First Name' />
                </label>
                <label>
                    <input
                        className='label formfield'
                        name='Lname'
                        type='text'
                        value={newUser.Lname}
                        onChange={handleChange}
                    placeholder='Last Name' />
                </label>
                <label>
                    <input
                        className='label formfield'
                        name='email'
                        type='email'
                        value={newUser.email}
                        onChange={handleChange}
                    placeholder='you@youremail.com' />
                </label>
                <label>
                    <input
                        className='label formfield'
                        name='password'
                        type='password'
                        value={newUser.password}
                        onChange={handleChange}
                    placeholder='********' />
                </label>
                <label>
                    <input
                        className='label formfield'
                        name='confPassword'
                        type='password'
                        value={newUser.confPassword}
                        onChange={handleChange}
                    placeholder='********' />
                </label>
                <button type='submit' id='btn'>Register</button>
                <a href ='/login'>
                    <span>already have an account? login</span>
                </a>
            </form>
        </div>
    )
}

export default Register