import Header from "../components/header";
import '../styles/landing.css';
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

export default function LandingPage(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return(
        <>
            <Header />
            <div className="main-content">
                <div className="content1">
                    <div className="col1">
                        <h1 className="title">Tired of Long, Crowded Lines?</h1>
                        <p className="description">
                            Traditional physical queues waste time and create frustration. 
                            People stand, wait, and do nothing — often for hours. 
                            Our system removes the stress by replacing physical lines with smart digital queuing.
                        </p>
                        <div className="btn-container">
                            <button onClick={handleLogin} className="mainBtn">
                                Login
                                <LoginIcon />
                            </button>
                            <button className="subBtn">Visitor</button>
                        </div>
                    </div>
                    <div className="col2">
                        <img src='/image/queue.svg' className="iconSVG" alt="" />
                    </div>
                </div>

                <div className="content2">
                    <div className="col2">
                        <img src='/image/notification.svg' className="iconSVG" alt="" />
                    </div>
                    <div className="col1 dark">
                        <h1 className="title">Stay Updated with Real-Time Notifications</h1>
                        <p className="description">
                            Receive instant alerts when your number is getting close. 
                            Whether you’re eating, studying, or doing errands, you’ll never miss your turn again. 
                            The system notifies you automatically on your phone.
                        </p>
                    </div>
                </div>
                <div className="content2">
                    <div className="col1 dark">
                        <h1 className="title">Know Exactly When It’s Your Turn</h1>
                        <p className="description">
                            Stop guessing and stressing. Our smart queue shows your current position and estimated waiting time. 
                            You can check your status anytime, so you know exactly when to return.
                        </p>
                    </div>
                    <div className="col2">
                        <img src='/image/waiting.svg' className="iconSVG" alt="" />
                    </div>
                </div>
                <div className="content1">
                    <div className="col1">
                        <h1 className="title">Track Your Queue Wherever You Are</h1>
                        <p className="description">
                           You don’t need to stay near the counter. View your queue status, 
                           time updates, and next steps directly on your phone. 
                           Freedom and convenience — all in one app.
                        </p>
                    </div>
                    <div className="col2">
                        <div className="man-background">
                            <img src='/image/man.webp' className="manPNG" alt="" />
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <div className="col1">
                        <h1>Content Sample1</h1>
                    </div>
                    <div className="col2">
                        <h1>Content Sample1</h1>
                    </div>
                </div>
            </div>  
        </>
    )
}