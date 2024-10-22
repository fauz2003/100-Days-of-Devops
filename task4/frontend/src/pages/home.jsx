import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const navLogin = () =>{
        navigate('/login');
    }
    const navRegister = () =>{
        navigate('/register');
    }

  return (
    <div className='home-container'>
        <div className='heading'>
            <h1>Welcome to GoalSetter!</h1>
            <p>Create your account or login to get started!</p>
        </div>
        <div className="btn-group">
            <button className='btn' onClick={navLogin}>Login</button>
            <button className='btn' onClick={navRegister}>Register</button>
        </div>
    </div>
  )
}

export default Home