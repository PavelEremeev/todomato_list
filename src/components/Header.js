import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import logo from '../images/todomato_logo.png'

function Header() {
  return (
    <header className='header'>
		<Link to='/' className='header__logo'>
			<h1 className='header__title'>TOD</h1>
			<img className='header__image' src={logo}/>
			<h1 className='header__title'>MAT</h1>
			<img className='header__image' src={logo}/>
		</Link>
		<div className='header__container'></div>
    </header>
  );
}

export default Header;
