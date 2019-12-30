import React from 'react';
import './Other.css';
export default class Search extends React.Component {
    render() {
     const {handleChange}= this.props;
        return (     
                <div className = "search" >
                    <input className = "sear" onChange={handleChange} type= "text" placeholder = "search"></input>
                </div>             
        )
    }
}
