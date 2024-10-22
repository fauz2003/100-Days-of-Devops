import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import { FaUser } from 'react-icons/fa';
import Spinner from '../components/Spinner';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const onchange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const checkPass = (name, email, password, password2) =>{
        if (!name || !email || !password || !password2) {
            toast.error('Please fill in all fields');
            return false;
        } 
        
        if (password !== password2) {
            toast.error('Passwords do not match');
            return false;
        }
        
        if(password.lenght < 8){
             toast.error('Password must be at least 8 characters long');
             return false;
        }

        return true;
    }

    const onsubmit = (e) => {
        e.preventDefault();

        const { name, email, password, password2 } = formData;

        if(checkPass(name, email, password, password2)){
            const userData = {
                name, email, password
            };
    
            dispatch(register(userData));
        }
    };

    const { name, email, password, password2 } = formData;

    return (
         <>
            <section className='heading'>
                <h1>
                     <FaUser /> Register
                 </h1>
                 <p>Create an account!</p>
             </section>
            <form onSubmit={onsubmit} className='form'>
                <div className="form-group">
                    <input type="text" className="form-control" id='name' name='name' value={name} placeholder='Enter your name' onChange={onchange} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onchange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onchange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id='password2' name='password2' value={password2} placeholder='Confirm password' onChange={onchange} />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Register</button>
                </div>
            </form>
        </>
     );
}

export default Register;
