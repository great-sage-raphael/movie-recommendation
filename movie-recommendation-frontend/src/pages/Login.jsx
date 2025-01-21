import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
const Login = () => {
  const {UserId}=useParams();
  console.log('User ID:', UserId);
  const userdetailobj={
    _id:UserId
  }
const [ singOut,setSignOut] = useState(false)
const [signIn,setSignIn]=useState(false)
const navigate = useNavigate();
const Gotologinr=()=>{
    navigate('/loginpage');
}
const signOUT=()=>{
  navigate('/')
}
const [userdetail, setUserdetail] = useState({
  username: "",
  _id: "",
  email: ""
});

console.log(userdetail)
useEffect(()=>{
  if(UserId){
    setSignIn(true);
  }
  axios.post(`http://localhost:3000/api/user`,userdetailobj)
  .then(Response=>{
    console.log(Response.data)
      setUserdetail(Response.data.user); 

  })
  
},[UserId])

console.log(userdetail)

  return (
    <>  

        { !signIn && <div className='fixed top-0 left-0 bg-slate-700 bg-opacity-70 backdrop-blur-xl p-4 w-64 h-full flex flex-col items-start shadow-lg'>
        

        {/* login Button */}
        <button 
          onClick={() => {console.log('login');Gotologinr()}} 
          className='mt-auto bg-slate-500 text-white py-1 px-4 rounded-2xl hover:bg-slate-900 top-10 left-1/3 fixed '
        >
          login
        </button>
      </div> 
      }

        {signIn && <div className='fixed top-0 left-0 bg-slate-700 bg-opacity-70 backdrop-blur-xl p-4 w-64 h-full flex flex-col items-start shadow-lg'>
        {/* userdetails */}
        <div className='flex-1'>
          <h2 className='text-3xl font-bold text-gray-900'>Welcome,  {userdetail?.username }</h2>
          <br/>
          <p className='text-sm text-gray-400'>Email: - {userdetail?.email} </p>
        </div>

        {/* SignOut Button */}
        <button 
          onClick={() =>{ console.log('Sign out');signOUT()}} 
          className='mt-auto bg-slate-500 text-white py-1 px-2 rounded-2xl hover:bg-red-700 bottom-10 left-1/3 fixed '
        >
          Sign Out
        </button>
      </div> }
    </>
  )
}

export default Login