import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let rootElem = document.getElementById('root');

ReactDOM.render(<App />, rootElem);

registerServiceWorker();
