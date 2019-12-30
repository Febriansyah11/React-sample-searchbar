import React from 'react';
import './App.css';
import Header from '../Other/Header';
import Search from '../Other/Search';
import employees from './employees.json';
import EmployedDetail from '../EmployePage/EmployeDetail';
import EmployeList from '../Hompage/EmployeList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmployee: null,
            employees,
        };
        this.handleClickEmployee = this.handleClickEmployee.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };


    handleInputChange(event) {
        this.setState({
            employees : employees.filter((item) => {
                return item.name.toLowerCase().includes(event.target.value);

            })


        })
    };

    handleClickEmployee(selectedEmployee, e) {
        this.setState({ selectedEmployee });

        console.log("Event :", e)
        console.log("this.state.selectedEmploye =", this.state.selectedEmployee);
        console.log(selectedEmployee);
    }

    render() {
        return ( 
            <header className = "App" >
                <div className = "App-header" >
                    <div className = "content" >
                        <Header head = "Employe Directory" / >
                        <Search handleChange = { this.handleInputChange }/> 
                        <EmployeList employees = { this.state.employees } handleClickEmployee = { this.handleClickEmployee }/> 
                        </div> 
                    <div className = "content" >
                        <Header head = "Employe" / >
                        <EmployedDetail employee = { this.state.selectedEmployee }/>
                    </div>
                </div>
            </header>
        )
    }
}