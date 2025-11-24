import '../styles/header.css'
import QLogo from '../../public/image/QLogo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    // const inputRef = useRef(); // Reference for input
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [searchVisible, setSearchVisible] = useState(false);

    // useEffect(() => {
        
    //     const handleWindowResize = () => {
    //         const width = window.innerWidth;
    //         setWindowWidth(width);
    //         setSearchVisible(false); //Reset search bar when resizing
    //     };

    //     const handleDocumentClick = (event) => {
    //         if (!activeNotifRef.current.contains(event.target)) {
    //             setActiveNotif(false);
    //         }

    //         if (!activeSettingsRef.current.contains(event.target)) {
    //             SetActiveSetting(false);
    //         }

    //         const Navigation = document.querySelector('nav');
    //         if(!Navigation.contains(event.target)){
    //             Navigation.classList.remove('sideBarActive');
    //         }
    //     };

    //     document.addEventListener("click", handleDocumentClick);
    //     window.addEventListener("resize", handleWindowResize);
    //     return () => {
    //         window.removeEventListener("resize", handleWindowResize);
    //         document.removeEventListener("click", handleDocumentClick);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (searchVisible) {
    //         setTimeout(() => {
    //             inputRef.current?.focus();
    //         }, 100);
    //     }
    // }, [searchVisible]);

    // const activeNotifRef = useRef();
    // const [activeNotif, setActiveNotif] = useState(false);
    // function handleToggleNotif(event){
    //     document.querySelector('nav').classList.remove("sideBarActive");
    //     SetActiveSetting(false);
    //     setActiveNotif(a => !a);
    //     event.stopPropagation();
    // }

    // const activeSettingsRef = useRef();
    // const [activeSetting, SetActiveSetting] = useState(false);
    // function handleToggleSettings(event){
    //     document.querySelector('nav').classList.remove("sideBarActive");
    //     setActiveNotif(false)
    //     SetActiveSetting(a => !a);
    //     event.stopPropagation();
    // }

    // function toggleMenu(event){
    //     document.querySelector('nav').classList.toggle("sideBarActive");
    //     SetActiveSetting(false);
    //     setActiveNotif(false)
    //     event.stopPropagation();
    // }

    // const navigate = useNavigate();
    // function logOut(){
    //    localStorage.removeItem("token");
    //    navigate("/");
    // }

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <>
        <header>

            <div className='logo-container'>
                <img src={QLogo} width="50px" className="logo-img" alt="Logo" />   
                <span>VirtQueue</span>
            </div>

            <div className="menu-btn" >
                <Link to='/'>Home</Link >
                <Link to='/#'>Documentation</Link >
                <Link to='/#'>Blogs</Link >
            </div>
            
            {/* <img src={logo} width="50px" className="logo-img" alt="Logo" /> */}
            <div className="footer">
                <button onClick={handleLogin}>Login</button>
            </div>
        </header>
        </>
    );
}