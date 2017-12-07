import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data/data';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={data}/>, document.getElementById('root'));
registerServiceWorker();
