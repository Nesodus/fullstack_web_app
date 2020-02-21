import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routings'

ReactDOM.render(<Router>
    <Routes />
</Router>, document.getElementById('root'));

serviceWorker.unregister();
