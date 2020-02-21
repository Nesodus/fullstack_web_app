import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import AboutMe from "./views/AboutMe";
import Contacts from "./views/Contacts";
import notFound from "./views/notFound";
import Home from "./views/Home";
import TechStack from "./views/TechStack";
import Experience from "./views/Experience";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/AboutMe" component={AboutMe}/>
            <Route exact path="/Contacts" component={Contacts}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/TechStack" component={TechStack}/>
            <Route exact path="/Experience" component={Experience}/>
            <Route component={notFound}/>
        </Switch>
    );
}
