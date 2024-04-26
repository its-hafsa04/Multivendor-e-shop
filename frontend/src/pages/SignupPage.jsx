import React, { useEffect } from 'react'
import Signup from '../components/Signup/Signup.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SignupPage() {

const navigate = useNavigate();
const {isAuthenticated} = useSelector((state) => state.user); 

  useEffect(()=>{
if(isAuthenticated === true){
  navigate('/');
}
  },[])
  return (
    <div>
    <Signup/>
    </div>
  )
}
