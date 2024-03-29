import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import logo from '../images/todomato_logo.png'

function Header() {
	return (
		<header className='header'>
			<Link to='/' className='header__logo'>
				<h2 className='header__title'>TOD</h2>
				<img className='header__image' src={logo} alt='tomatopicture' />
				<h2 className='header__title'>MAT</h2>
				<img className='header__image' src={logo} alt='tomatopicture' />
			</Link>
			<div className='header__container'>
				<Link to='/'>
					<button className='header__button'>Домой</button></Link>
				<Link to='/timer'>
					<button className='header__button'>Таймер</button></Link>
			</div>
		</header>
	);
}

export default Header;
