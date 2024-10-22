import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals } from '../features/goals/goalSlice'
import { reset } from '../features/auth/authSlice'
import GoalItem from '../components/GoalItem'

const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals)
  var userEmail = useSelector((state) => state.email.currentEmail);
  useEffect(() =>{

    if(isError){
      toast.error(message);
    }

    if(!user){
      navigate('/login');
      toast.error('Please login to access dashboard');
    }
    
    userEmail = localStorage.getItem('userEmail');
    dispatch(getGoals(userEmail));
    return () =>{
      dispatch(reset());
    }
  },[user, navigate, isError, dispatch])

  if(isLoading){
    return <Spinner/>
  }
    
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user.name} !</h1>
        <p>Here you can create, view, update and delete your goals</p>
      </section>
      <GoalForm/>
      <section className='content'>
        {goals.length > 0 ?
         (<div className='goals'>
          {goals.map((goal) => (
            <GoalItem key={goal._id} goal={goal}/>
          ))}
         </div>) 
        :
         (<h3>You do not have any goals</h3>)
        }
      </section>
    </>
  )
}

export default Dashboard