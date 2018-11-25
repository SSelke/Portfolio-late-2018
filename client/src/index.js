import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import Contact from './components/Contact/Contact';
import Header from './components/Partials/Header/Header';


ReactDOM.render(
    <div id="app">
        <BrowserRouter>
            <div className="container-fluid m-0 p-0 h-100">
                <Header />
                <Switch>
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/about' component={About} />
                    <Route path='/resources' component={Resources} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>, 
    document.getElementById('root')
);