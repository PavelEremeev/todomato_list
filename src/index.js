import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import StateProvider from './components/StateProvider/StateProvider';


ReactDOM.render(
	<StateProvider>
		<App />
	</StateProvider>,
	document.getElementById('root')
);
