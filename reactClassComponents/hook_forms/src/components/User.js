import React, {useState} from 'react';

const User = () => {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [conpass, setconpass] = useState("");

    return (
        <div className = "container form-control m-2">
            <form>
                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input onChange = {(e) => setfname(e.target.value)} type="text" className = "form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input onChange = {(e) => setlname(e.target.value)} type="text" className = "form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email:</label>
                    <input onChange = {(e) => setemail(e.target.value)} type="text" className = "form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password:</label>
                    <input onChange = {(e) => setpass(e.target.value)} type="password" className = "form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="conpass">Confirm Password:</label>
                    <input onChange = {(e) => setconpass(e.target.value)} type="password" className = "form-control"/>
                </div>
                <br />
                <input className = "btn btn-success m-3" type="submit" value="Register" />
            </form>
            <hr />
            <div className="container">
                <h3>Your info </h3>
                <p>First Name: {fname}</p>
                <p>Last Name: {lname}</p>
                <p>Email: {email}</p>
                <p>Password: {pass}</p>
                <p>Confirm Password: {conpass}</p>
            </div>
        </div>
    );
};

export default User;