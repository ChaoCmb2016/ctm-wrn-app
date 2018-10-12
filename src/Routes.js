import React from 'react';
// import {Router,Route,browserHistory} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/App.js';
import Detail from './pages/Detail.js';


const Routes = () => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/detail' component={Detail} />
        </div>

    </BrowserRouter>
)

export default Routes;
