import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import loginpage from './loginpage';

const Register = () => {

    const [response, setResponse] = useState(null);
    const [formdata,setformdata]=useState({
        username :"",
        email:"",
        password:"",
        confirmpass:"",
    });
    const navigate = useNavigate();


    const handleChange=(e)=>{
        const {name,value}=e.target;
        setformdata({
            ...formdata,
            [name]:value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formdata.password==formdata.confirmpass)
        {
            axios.post(`http://localhost:3000/api/auth/register`,formdata)
            .then(response=>{
                setResponse(response.data); 
                console.log(response)
                console.log(response.data)
    
            })
           
                navigate('/');
            

        }
        else{
            alert('please check the entered password')
        }
       
    }
    console.log(formdata)

  return (
    <div>
      <section className="bg-slate-700 backdrop-blur-xl rounded-3xl">
        <div className="flex flex-col items-center rounded-2xl justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            MovieRec    
          </a>
          <div className="w-full bg-white rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                  <input 
                    type="username" 
                    name="username" 
                    id="username" 
                    value={formdata.username}
                    onChange={handleChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="enter a unique username" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 

                    value={formdata.email}
                    onChange={handleChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="name@company.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 

                    value={formdata.password}
                    onChange={handleChange}
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input 
                    type="password" 
                    name="confirmpass" 
                    id="confirm-password"

                    value={formdata.confirmpass} 
                    onChange={handleChange}
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required 
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="terms" 
                      aria-describedby="terms" 
                      type="checkbox" 
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                      required 
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <Link to='/loginpage' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;