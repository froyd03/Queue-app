import { useEffect, useState } from 'react'
import '../styles/login.css'

export default function LoginPage(){

    const [loginData, setLoginData] = useState({});
    const handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setLoginData(data => ({...data, [key]: value}))
    }

    const handleSubmitForm = (e) => {
        console.log("submitted")
    }

    return(
        <div className="main-login-form">
            <div className="row1">
                <div className="login-container">
                    <img src="/public/image/QLogo.png" width='100px' alt="" />
                    <h2>Log in</h2>
                    <form onSubmit={handleSubmitForm} className="login-form">
                        <div className="inputText-container">
                            <label>Email *</label>
                            <input 
                                type="text" 
                                name='email'
                                onChange={handleInput} 
                                placeholder='samplemail@gmail.com'
                            />
                        </div>
                        <div className="inputText-container">
                            <label>Password *</label>
                            <input type="password" name='password' onChange={handleInput}/>
                        </div>
                        <button className='btnSubmit'>Log in</button>
                    </form>
                </div>
            </div>
            <div className="row2">
                <div className="text-container">
                    <h1>Welcome back!👋🏻</h1>
                    <p>Please enter your details to Log in to your account.</p>
                </div>
            </div>
        </div>
    )
}