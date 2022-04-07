import React from 'react'

const Register = () => {
    return (
        <div>
            <form className='form'>
                <label>
                    <input
                        className='label'
                        name='Fname'
                        type='text'
                        id='formfield'
                    placeholder='First Name' />
                </label>
                <label>
                    <input
                        className='label'
                        name='Lname'
                        type='text'
                        id='formfield'
                    placeholder='Last Name' />
                </label>
                <label>
                    <input
                        className='label'
                        name='email'
                        type='email'
                        id='formfield'
                    placeholder='you@youremail.com' />
                </label>
                <label>
                    <input
                        className='label'
                        name='password'
                        type='password'
                        id='formfield'
                    placeholder='********' />
                </label>
                <label>
                    <input
                        className='label'
                        name='Confpassword'
                        type='password'
                        id='formfield'
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