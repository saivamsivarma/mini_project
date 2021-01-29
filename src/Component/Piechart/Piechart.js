import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './Piechart.css'

function Dashboard(props) {
    return (
        <div className="card shadow p-4">
            <PieChart data={[{ title: 'Jobs', value: 5, color: '#04283E' }, { title: 'Replyed Applications', value: 12, color: '#8FBAF3' },{ title: 'Pending Applications', value: 15, color: '#5D6FFF' }]} animate='true' lineWidth="50"/>
            <div className="d-flex align-items-center justify-content-around mt-4">
                <div className="d-flex align-items-center">
                    <div className="blue mr-3"></div>
                    <div className="chart-label">{props.name1}</div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="dark mr-3"></div>
                    <div className="chart-label">{props.name3}</div>
                </div>
            </div>
            <div className="d-flex align-items-center mx-auto my-2">
                    <div className="light mr-3"></div>
                    <div className="chart-label">{props.name2}</div>
                </div>
        </div>
    );
}

export default Dashboard;