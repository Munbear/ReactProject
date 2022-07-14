import React from 'react'
import { useNavigate} from "react-router-dom";
import '../styels/LoginStyle/LoginFormStyle.scss'

const LoginForm = () => {

    const navigate = useNavigate()
    const submit = () => {
        navigate('/home')
    }

    return (
        <>
            <section className='container'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <input className='input-text' type='text' placeholder='Email'/>
                    <input className='input-pw' type='password' placeholder='Password'/>
                    <form className='submit-form'>
                        <button className='submit-btn' onClick={submit}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default LoginForm