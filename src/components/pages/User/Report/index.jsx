import React, { useState } from 'react'
import ChartView from './ChartView'
import TableView from './TableView';

const Report = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabCliCk = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <div className='report-screen'>
            <div className="tab-header">
                <button className={`btn btn-tab ${activeTab === '' ? "active" : ""}`} onClick={() => handleTabCliCk('')}>Chart View</button>
                <div className="seperator"></div>
                <button className={`btn btn-tab ${activeTab === 'table' ? "active" : ""}`} onClick={() => handleTabCliCk('table')}>Table View</button>
            </div>

            <div className="tab-body">
                {activeTab === "" && (<ChartView />)}
                {activeTab === "table" && (<TableView />)}
            </div>
        </div>
    )
}

export default Report