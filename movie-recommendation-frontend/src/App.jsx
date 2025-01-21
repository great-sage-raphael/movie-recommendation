import { useState } from 'react'
import Floatingbar from './components/Floatingbar'
import './App.css'
import Movie from './components/Movie'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from './pages/Loginpage';
function App() {

const [search_query,setSearch_query] = useState()
const search=(searchquery)=>{
    setSearch_query(searchquery)
};
const [loginState,setloginState] = useState(false)
const loginstat=(loginstatee)=>{
 setloginState(loginstatee)
}
console.log(search_query)
  return (
    <>
    <Router>
      <Routes>
          <Route path="/"
           element={ <>
           <Movie search_query={search_query}/>
         <Floatingbar search={search} loginstat={loginstat} /> 
         {loginState && <Login/>}
          </>} />
          <Route path="/register" element={ <Register/>} />
          <Route path='/loginpage' element={<Loginpage/>}/>
          <Route path="/user/:UserId"
           element={ <>
           <Movie search_query={search_query}/>
         <Floatingbar search={search} loginstat={loginstat} /> 
         {loginState && <Login/>}
          </>} />
          </Routes>
    </Router>
  
   
    </>
  )
}

export default App
