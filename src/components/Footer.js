import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../images/telegram_logo.png'


import './Footer.css';


function Footer() {  

	const date = new Date();
	
	
	return (
    <footer className='footer'>
			<div className='footer__container'>
				<p className='footer__date'>{date.getFullYear() + ' '}&copy;</p>
				<a href='https://t.me/kermit_kvebit'
				className='footer__link'
				target='_blank'>
					<img src={footerLogo}  className='footer__image'/>
				</a>
			</div>
			
    </footer>
  );
}

export default Footer;