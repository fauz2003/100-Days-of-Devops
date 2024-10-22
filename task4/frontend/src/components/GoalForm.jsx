import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'
import { useSelector } from 'react-redux'

const GoalForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const userEmail = useSelector((state) => state.email.currentEmail); 
    const onSubmit = (e) =>{
        e.preventDefault();

        if (userEmail) {
            dispatch(createGoal({ email: userEmail, text  }));
            setText('');
        } else {
            console.error('User email not found');
        }
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}> 
            <div className="form-group">
                <label htmlFor="text"><b>Goals: </b></label>
                <input type="text" name="text" id='text' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>Add Goal</button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm