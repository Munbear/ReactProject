import React from 'react'
import '../styels/LoginStyle/LoginFormStyle.scss'

const LoginForm = () => {
    return (
        <>
            <section className='container'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <input className='input-text' type='text' placeholder='Email'/>
                    <input className='input-pw' type='password' placeholder='Password'/>
                    <form className='submit-form'>
                        <button className='submit-btn'>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default LoginForm