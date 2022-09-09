import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './components/App';
import NewApplication from './components/business/NewApplication'
import Transaction from './components/business/Transaction'

export default class MyApp extends Component{
    render(){return(
        <div className="">
                <Routes>
                    <Route exact path="/home" element={<App/> } />
                    <Route exact path="/addNew" element={<NewApplication/> } />
                    <Route exact path="/trans/:id" element={<Transaction/> } />
                </Routes>
        </div>
    )}
}
if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp/>
        </BrowserRouter>
    , document.getElementById('app'));
}