import React from 'react';
import './Hompage.css';
import Button from '@material-ui/core/Button';


export default function EmployeItem(props) {
    const { employee, handleClick } = props;
    return ( <
        Button onClick = {
            (e) => handleClick(employee) }
        className = "data" >
        <
        img className = "gambar"
        src = { employee.photo }
        /> <
        div >
        <
        h3 > { employee.name } < /h3> <
        p > { employee.position } < /p> <
        /div> <
        /Button>


    )
}