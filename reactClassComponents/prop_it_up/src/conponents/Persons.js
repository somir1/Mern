import React, { Component } from 'react';

class Persons extends Component {
    render() {
        return (
        <>
        <div>
            <h1>{this.props.lnameOfPerson}, {this.props.fnameOfPerson}</h1>
            <p>Age: {this.props.age}</p>
            <p>HairColor: {this.props.hair}</p>
            <p>Eye Color: {this.props.eyes}</p>
        </div>

        {/* <div>
            <h4>Oh Crap.</h4>
        </div> */}
        </>
        )
    }
}

export default Persons;