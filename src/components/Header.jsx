import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

function Header(){
    return(
    <div className='flex w-full p-6 bg-blue-50 overflow-hidden justify-between items-center shadow-md'>
        <h1>Song Manager</h1>

        <nav className='flex justify-between'>
        <Link to="/">Add Song</Link>
        <Link to="/search">Search</Link>
        <Link to="/format">Format Lyrics</Link>
      </nav>
    </div>
    )
}
export default Header;