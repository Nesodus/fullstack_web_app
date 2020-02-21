import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import notFound from "./notFound";
import Home from "./Home";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/AboutMe" exact component={AboutMe}/>
            <Route path="/Contacts" exact component={Contacts}/>
            <Route path="/Home" exact component={Home}/>
            <Route path="*" exact component={notFound}/>
        </Switch>
    );
}
