import { NavLink } from "react-router-dom"

export const NavBar = () =>{
    return(
        <nav className='flex space-x-3'>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/students'} >students</NavLink>
            <NavLink to={'/contact'} >contact</NavLink>
           <NavLink to={`/form`}>Form</NavLink>
        </nav>
    )
}