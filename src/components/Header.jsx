import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

function Header(){
    return(
    <div className='flex w-full p-4 bg-blue-800 overflow-hidden justify-between items-center shadow-md'>
        <h1 className="text-white">SongBird</h1>

        <nav className='flex justify-between items-center gap-2'>
        <Link to="/">Add Song</Link>
        <Link to="/search">Search</Link>
        <Link to="/format">Format Lyrics</Link>
      </nav>
    </div>
    )
}
export default Header;