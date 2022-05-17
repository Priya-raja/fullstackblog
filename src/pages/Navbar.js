import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to ='/'> Home </Link>
            </li>
            <li>
                <Link to ='/about'> About Page </Link>
            </li>
            <li>
                <Link to ='/article'> ArticleList </Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar