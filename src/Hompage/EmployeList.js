import React from 'react';
import './Hompage.css';
import EmployeItem from './EmployeItem';

class EmployeList extends React.Component {
    render() {
        const { employees, handleClickEmployee } = this.props;
        console.log("Employe List: ", employees)

        return ( <
            div className = "person" > {
                employees.map((employee) => {
                    return <EmployeItem key = { employee.id }
                    employee = { employee }
                    handleClick = { handleClickEmployee }
                    /> 
                })
            } <
            /div>
        )
    }
}
export default EmployeList;