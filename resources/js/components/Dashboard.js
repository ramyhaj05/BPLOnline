import React, { Component } from 'react';
import BusinessTable from './table/businessTable';

const Dashboard = () =>{
    return(
        <div className="container w-full">
            <div className="row justify-content-center">
                <div className="w-full">
                    <div className="card-body bg-gray-100 rounded shadow p-3">
                        <BusinessTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
