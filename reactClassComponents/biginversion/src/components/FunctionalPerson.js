import React, {useState} from 'react';

const FunctionalPerson = (props)=> {
    
    const [age, setage] = useState(props.age)

    const Popup = ()=>{
        console.log(`WTF ${props.fname}`);
        console.log("Your a year older");
        alert(`Happy birthday ${props.fname}!!!! You are a year older.`)
        setage(age + 1)
    }
    return (
        <>
            <div className="people">
                <h2>{props.lname}, {props.fname}</h2>
                <p>Age: {age}</p>
                <p>Haircolor: {props.hairc}</p>
                <p>Eye Color: {props.eyec}</p>
                <p><button className="btn btn-success" onClick = {Popup}>Its my birthday</button></p>
            </div>
        </>
    )
}

export default FunctionalPerson;