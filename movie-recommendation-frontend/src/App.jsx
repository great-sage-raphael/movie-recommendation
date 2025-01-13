import { useState } from 'react'
import Floatingbar from './components/Floatingbar'
import './App.css'
import Movie from './components/Movie'

function App() {

const [search_query,setSearch_query] = useState()
const search=(searchquery)=>{
    setSearch_query(searchquery)
};

console.log(search_query)
  return (
    <>
   <Movie search_query={search_query}/>
   <Floatingbar search={search}/>
    </>
  )
}

export default App
