import React from 'react';
import './Employe.css';
import EmployeCard from './EmployeCard';

export default class EmployedDetail extends React.Component {
    render() {
        const {employee} = this.props;
        if(!employee){
            return(
                <div className="empl">
                    <p></p> 
                </div>
            )
        }
        return (
            <div className="card">
                <EmployeCard employee={employee}/>            
                    <div className = "data">
                        <h3>Email</h3>
                        <p>{employee.detail.email}</p>
                    </div>
                    
                    <div className = "data">
                        <h3>Phone</h3>
                        <p>{employee.detail.phone}</p>
                    </div>
                    
                    <div className = "data">                  
                        <h3>Address</h3> 
                        <p>{employee.detail.address}</p>
                    </div>
             </div> 
        )
    }
}


  