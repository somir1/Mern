import React, { Component } from 'react';

class Persons extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        const Popup = ()=>{
            console.log(`WTF ${this.props.fnameOfPerson}`);
            console.log("Your a year older");
            alert(`Happy birthday ${this.props.fnameOfPerson}!!!! You are a year older.`)
            this.setState({age: this.state.age + 1})
        }
        return (
        <>
        <div>
            <h1>{this.props.lnameOfPerson}, {this.props.fnameOfPerson}</h1>
            <p>Age: {this.state.age}</p>
            <p>HairColor: {this.props.hair}</p>
            <p>Eye Color: {this.props.eyes}</p>
            <p><button className="btn btn-success" onClick = {Popup}>Its my birthday</button></p>
        </div>
        </>
        )
    }
}

export default Persons;