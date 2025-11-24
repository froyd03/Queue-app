import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './portals/LandingPage';
import LoginPage from './portals/LoginPage';
import './styles/global.css';

export default function App(){
return (
    <HashRouter>

        {/* landing/open pages */}
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>

        {/* staff portal */}
        {/* <Routes>
            <Route path='/staff' element={''}/>
            <Route 
                path='/dashboard' 
                element={
                    ''
                }
            />
            <Route 
                path='/inventory'
                element={
                ''
                }
            />
        </Routes> */}

        {/* student portal */}
        {/* <Routes>
            <Route path='/student' element={''}/>
            <Route 
                path='/dashboard' 
                element={
                    ''
                }
            />
            <Route 
                path='/inventory'
                element={
                ''
                }
            />
        </Routes> */}
    </HashRouter>
  )
}