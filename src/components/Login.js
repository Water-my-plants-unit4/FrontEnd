import React from 'react'

const Login = () => {
    return (
        <div>
            <form className='form'>
                <label>
                    <input
                        className='label'
                        name='name'
                        type='text'
                        id='formfield'
                    placeholder='username' />
                </label>
                <label>
                    <input
                        className='label'
                        name='password'
                        type='password'
                        id='formfield'
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