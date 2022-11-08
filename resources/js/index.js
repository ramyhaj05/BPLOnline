import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './components/App';
import NewApplication from './components/Transaction/NewApplication';
import NewBusiness from './components/TransactionType/New/NewBusiness';
import Uploading from './components/TransactionType/New/Uploading';
import EditBusinessNew from './components/TransactionType/New/EditBusinessNew';
import DeleteBusinessNew from './components/TransactionType/New/DeleteBusinessNew'

import Renewal from './components/TransactionType/Renewal/Renewal';
import RenewalUpload from './components/TransactionType/Renewal/RenewalUpload';
import EditRenewal from './components/TransactionType/Renewal/EditRenewal';
import DeleteBusinessRenewal from './components/TransactionType/Renewal/DeleteBusinessRenewal';
import Review from './components/TransactionType/Renewal/Review';

import Dashboard from './components/Dashboard';
import Login from './components/Authenticate/Login';
import RenewalStatus from './components/TransactionType/Renewal/RenewalStatus';
import NewStatus from './components/TransactionType/New/NewStatus';

export default class MyApp extends Component{
    render(){return(
        <div className="">
                <Routes>
                    {/* dashboard */}
                    <Route exact path="/dashboard" element={<Dashboard/> } />
                    <Route exact path="/home" element={<App/> } />
                    <Route exact path="/user-login" element={<Login/> } />

                    {/* New */}
                    <Route exact path="/addNew" element={<NewApplication/> } />
                    <Route exact path="/new-business" element={<NewBusiness/> } />
                    <Route exact path="/new-business/upload/:id" element={<Uploading/> } />
                    <Route exact path="/edit/:id" element={<EditBusinessNew/> } />
                    <Route exact path="/cancel/:id" element={<DeleteBusinessNew/> } />
                    <Route exact path="/status/new/:id" element={<NewStatus/> } />

                    {/* Renewal */}
                    <Route exact path="/renewal" element={<Renewal/> } />
                    <Route exact path="/upload/renewal/:id" element={<RenewalUpload/> } />
                    <Route exact path="/review/renewal/:id" element={<Review/> } />
                    <Route exact path="/edit/renewal/:id" element={<EditRenewal/> } />
                    <Route exact path="/cancel/renewal/:id" element={<DeleteBusinessRenewal/> } />
                    <Route exact path="/status/renewal/:id" element={<RenewalStatus/> } />

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