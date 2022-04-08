import React from 'react'

const Login = () => {
    return (
        <div>
            <form className='form'>
                <label>
                    <input
                        className='label formfield'
                        name='name'
                        type='text'
                    placeholder='username' />
                </label>
                <label>
                    <input
                        className='label formfield'
                        name='password'
                        type='password'
                    placeholder='******' />
                </label>
                <button type='submit' id='btn'>Login</button>
                <a href ='/register'>
                    <span >new here? sign up.</span>
                </a>
            </form>
        </div>
    )
}

export default Login