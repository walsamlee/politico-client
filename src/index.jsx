import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store/store';

import './style.css';

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('app'));
