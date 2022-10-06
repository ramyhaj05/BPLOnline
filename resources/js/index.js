import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './components/App';
import NewApplication from './components/Transaction/NewApplication'
import NewBusiness from './components/TransactionType/New/NewBusiness';
import Uploading from './components/TransactionType/New/Uploading';
import EditBusinessNew from './components/TransactionType/New/EditBusinessNew';
import Renewal from './components/TransactionType/Renewal/Renewal';
import RenewalForm from './components/TransactionType/Renewal/RenewalForm';
import RenewalUpload from './components/TransactionType/Renewal/RenewalUpload';

export default class MyApp extends Component{
    render(){return(
        <div className="">
                <Routes>
                    <Route exact path="/home" element={<App/> } />
                    <Route exact path="/addNew" element={<NewApplication/> } />
                    <Route exact path="/new-business" element={<NewBusiness/> } />
                    <Route exact path="/new-business/upload/:id" element={<Uploading/> } />
                    <Route exact path="/edit/:id" element={<EditBusinessNew/> } />
                    <Route exact path="/renewal" element={<Renewal/> } />
                    {/* <Route exact path="/renewal/form" element={<RenewalForm/> } /> */}
                    <Route exact path="/renewal/upload/:id" element={<RenewalUpload/> } />
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