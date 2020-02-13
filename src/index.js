/*
What is this sorcery?? Importing a CSS file in JavaScript?
Make sure you understand what's going on here!!!
*/
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import Repo from "./components/Repo";
import Follower from "./components/Follower";
import Following from "./components/Following";

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}/>
            <Route path="user/:username/repos" component={Repo}/>
            <Route path="user/:username/followers" component={Follower}/>
            <Route path="user/:username/following" component={Following}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
