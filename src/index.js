import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contacts from './components/Contacts'
import AboutMe from './components/About me'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import notFound from "./components/notFound";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
function routing() {
    return (
        <Router history={history}>
            <Switch>
                <div>
                    <Route path="/" component={App}/>
                    <Route path="/About\me" component={AboutMe}/>
                    <Route path="/Contacts" component={Contacts}/>
                    <Route path="*" component={notFound}/>
                </div>
            </Switch>
        </Router>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
