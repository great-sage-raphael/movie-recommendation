import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useNavigation } from 'react-router-dom';
const Login = () => {
const [ singOut,setSignOut] = useState(false)
const [signIn,setSignIn]=useState(false)
const navigate = useNavigate();
const GotoRegister=()=>{
    navigate('/register');
}
  return (
    <>  

        {  <div className='fixed top-0 left-0 bg-slate-700 bg-opacity-70 backdrop-blur-xl p-4 w-64 h-full flex flex-col items-start shadow-lg'>
        

        {/* SignOut Button */}
        <button 
          onClick={() => console.log('Sign out')} 
          className='mt-auto bg-slate-500 text-white py-1 px-4 rounded-2xl hover:bg-slate-900 top-10 left-1/3 fixed '
        >
          login
        </button>
      </div> }

        {signIn && <div className='fixed top-0 left-0 bg-slate-700 bg-opacity-70 backdrop-blur-xl p-4 w-64 h-full flex flex-col items-start shadow-lg'>
        {/* userdetails */}
        <div className='flex-1'>
          <h2 className='text-xl font-bold text-gray-900'>Welcome,</h2>
          <p className='text-sm text-gray-400'>Email: </p>
        </div>

        {/* SignOut Button */}
        <button 
          onClick={() => console.log('Sign out')} 
          className='mt-auto bg-slate-500 text-white py-1 px-2 rounded-2xl hover:bg-red-700 bottom-10 left-1/3 fixed '
        >
          Sign Out
        </button>
      </div> }
    </>
  )
}

export default Login