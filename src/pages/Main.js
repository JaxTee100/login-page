import React from 'react'
import { Link } from 'react-router-dom'


const Main = () =>{
    return(
        <div>
            <Link to="/register">Register Page</Link>
            <Link to="/login">Login Page</Link>
            
        </div>
    )
}


export default Main