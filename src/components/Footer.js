import React from 'react';
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
					rel="noreferrer"
					target='_blank'>
					<img src={footerLogo} className='footer__image' alt='footerimage' />
				</a>
			</div>

		</footer>
	);
}

export default Footer;