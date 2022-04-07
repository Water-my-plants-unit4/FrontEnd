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
                    placeholder='username' />
                </label>
                <label>
                    <input
                        className='label'
                        name='password'
                        type='password'
                    placeholder='******' />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login