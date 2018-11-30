import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

ReactDOM.render(
    <div id="app">
        <BrowserRouter>
            <div className="container-fluid m-0 p-0 h-100">
                <Switch>
                    <Route path='/contact' component={Contact} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>, 
    document.getElementById('root')
);