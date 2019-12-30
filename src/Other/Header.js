import React from 'react';
import './Other.css';
// import './App.css';


export default class Header extends React.Component {
    render() {
        return ( 
        <div className = "direct" > <h2 className = "ory"> {this.props.head} </h2></div>
        )
    }
}