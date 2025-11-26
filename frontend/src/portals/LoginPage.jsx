import { useEffect, useState } from 'react'
import '../styles/login.css'
import axios from '../utils/axios.js'
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){

    const [loginData, setLoginData] = useState({});

    const handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setLoginData(data => ({...data, [key]: value}))
        setLoginMessage("");
    }

    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState("");

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post('/user/login', loginData);
            if(data.status){
                localStorage.setItem("token", data.response);
                if(data.role === "student"){
                    navigate('/student')
                }
                else if(data.role === "staff"){
                    navigate('/staff')
                }
                else if(data.role === "admin"){
                    navigate('/admin')
                }
                else{
                    setLoginMessage("User role doesn't exist!");
                    setLoginData(data => "")
                }
            }
            else{
                setLoginMessage(data.response)
            }
        }
        catch(error){
            console.error("error submiting form try again!", error);
        }
    }

    useEffect(() => {
        console.log(loginData)
    }, [loginData])

    return(
        <div className="main-login-form">
            <div className="row1">
                <div className="login-container">
                    <img src="/public/image/QLogo.png" width='100px' alt="" />
                    <h2>Log in</h2>
                    <form onSubmit={handleSubmitForm} className="login-form">
                        <div className="inputText-container">
                            <label>Username *</label>
                            <input 
                                type="text" 
                                name='userId'
                                onChange={handleInput} 
                                placeholder='samplemail@gmail.com'
                            />
                        </div>
                        <div className="inputText-container">
                            <label>Password *</label>
                            <input type="password" name='password' onChange={handleInput}/>
                            {loginMessage && <label className='login-message'>{loginMessage}</label>}
                        </div>
                        <div className="inputText-container">
                            <button className='btnSubmit'>Log in</button>
                        </div>
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