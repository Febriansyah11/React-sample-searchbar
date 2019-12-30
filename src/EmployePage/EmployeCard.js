import React from 'react';
import './Employe.css';

export default class EmployeCard extends React.Component{
render(){
    const {employee} = this.props;
        return ( 
            <div>
                <div className = "data1" >
                    <img className = "gambar" src ={this.props.employee.photo}/> 
                    <div className ="text">
                        <h2>{employee.name}</h2> 
                        <p>{employee.position}</p>
                    </div>
                </div>
            </div>
        )
    }
}


  