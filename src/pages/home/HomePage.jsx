import React,{useEffect} from 'react'
import './Home.css'
import axios from '../../axios'
export const HomePage = () => {
useEffect(()=>
 { axios.get('/photos')},[]
)
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

