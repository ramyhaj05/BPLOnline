import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './components/App';
import NewApplication from './components/Transaction/NewApplication'
import NewBusiness from './components/TransactionType/New/NewBusiness';
import Uploading from './components/TransactionType/New/Uploading';
import EditBusinessNew from './components/TransactionType/New/EditBusinessNew';
import Renewal from './components/TransactionType/Renewal/Renewal';
import DeleteBusinessNew from './components/TransactionType/New/DeleteBusinessNew'
import RenewalUpload from './components/TransactionType/Renewal/RenewalUpload';
import Review from './components/TransactionType/Renewal/Review';
import Dashboard from './components/Dashboard';

export default class MyApp extends Component{
    render(){return(
        <div className="">
                <Routes>
                    <Route exact path="/home" element={<App/> } />
                    <Route exact path="/addNew" element={<NewApplication/> } />
                    <Route exact path="/new-business" element={<NewBusiness/> } />
                    <Route exact path="/new-business/upload/:id" element={<Uploading/> } />
                    <Route exact path="/edit/:id" element={<EditBusinessNew/> } />
                    <Route exact path="/cancel/:id" element={<DeleteBusinessNew/> } />
                    <Route exact path="/renewal" element={<Renewal/> } />
                    {/* <Route exact path="/renewal/form" element={<RenewalForm/> } /> */}
                    <Route exact path="/upload/renewal/:id" element={<RenewalUpload/> } />
                    <Route exact path="/review/renewal/:id" element={<Review/> } />
                    <Route exact path="/dashboard" element={<Dashboard/> } />
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