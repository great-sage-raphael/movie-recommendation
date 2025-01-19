import React, { useState } from 'react'

const Floatingbar = ({search, loginstat}) => {
  let movie;
  const [loginstatee,setloginStatee]=useState(false)
  const LoginCall=()=>{
    setloginStatee(!loginstatee);
    loginstat(loginstatee);
  }
  return (
    <>
    
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-transparent backdrop-blur-xl rounded-full shadow-xl flex items-center px-6 py-4 space-x-6">
      
      <button className="flex items-center space-x-2 rounded-full"
      onClick={LoginCall}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 4c-2.667 0-8 1.333-8 4v1h16v-1c0-2.667-5.333-4-8-4z"
          ></path>
        </svg>
        <span className="text-white">Login</span>
      </button>

      
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-700 focus:outline-none"
        value={movie}
        onChange={(e)=>{(search(e.target.value))}}    
     />

      
    </div>
    </>
  )
}

export default Floatingbar