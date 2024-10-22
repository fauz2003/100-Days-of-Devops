import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { setEmail } from '../features/emailReducer';


const Login = () => {

    const [formData, setFormData] = useState({
    email: '',
    password: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess && user) {
            navigate('/dashboard');
        }

        if (isLoading) {
            return <Spinner />;
        }

        dispatch(reset());

        
     }, [user, isError, isSuccess, message, navigate, dispatch]);


    const onchange = (e) =>{
        setFormData((prevStat)=>({
            ...prevStat,
            [e.target.name]: e.target.value,
            
        }));
    }

    const onsubmit = (e) =>{
        e.preventDefault();

        const userData = {
            email, 
            password
        }
        localStorage.setItem('userEmail', email);
        dispatch(setEmail(email));
        dispatch(login(userData));

        
    }

    if(isLoading) {
        return <Spinner/>
    }

    const { email, password} = formData;
  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt/> Login
            </h1>
            <p>Login to your account!</p>
        </section>
        <form onSubmit={onsubmit} className='form'>
            <div className="form-group">
                <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onchange}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onchange}/>
            </div>
            <div className="form-group">
                <button type='submit' className='btn btn-block'>Login</button>
            </div>
        </form>
    </>
  )
}

export default Login