import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useLocation  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);
    let val = 0;

    if (location.pathname === '/') {
        return null;
    }
    else if (location.pathname === '/login'){
        val = 1;
    }

    const onLogout = () =>{
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            {user ? (<li>
                <button className='btn' onClick={onLogout}>
                <FaSignOutAlt/>Logout
                </button>
            </li>) : 
            <>  
                {val === 0 ?
                    <li>
                        <Link to='/login'><FaSignInAlt/>Login</Link>
                    </li> 
                    :
                    <li>
                        <Link to='/register'><FaUser/>Register</Link>
                    </li>
                }
                
            </>}
            
        </ul>
    </header>
  )
}

export default Header