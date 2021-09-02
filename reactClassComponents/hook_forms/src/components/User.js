import React, {useState} from 'react';

const User = () => {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [conpass, setconpass] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    console.log(validateEmail('anystring@anystring.anystring'));

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, pass, conpass };
        console.log("Welcome", newUser.fname);
        alert(`Welcome, ${fname}`);
        setHasBeenSubmitted( true );
    };

    // const emailvalid = \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b

    return (
        <div className = "bg-dark text-white container form-control m-2">
            <hr />
            <form onSubmit = {createUser}>
                
            {hasBeenSubmitted ? (
                <h2>Thank you for submitting the form!</h2>
            ):(
                <h2>Welcome, please submit the form.</h2>
            )}  

                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input onChange = {(e) => setfname(e.target.value)} type="text" className = "form-control"/>

                {
                   hasBeenSubmitted && fname.length < 3 || fname.length > 20?
                        <p className="text-danger">Your first name must be between 3-20 characters</p>:
                        ""
                }

                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input onChange = {(e) => setlname(e.target.value)} type="text" className = "form-control"/>

                    {
                   hasBeenSubmitted && lname.length < 3 || lname.length > 20?
                        <p className="text-danger">Your last name must be between 3-20 characters</p>:
                        ""
                }

                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email:</label>
                    <input onChange = {(e) => setemail(e.target.value)} type="text" className = "form-control"/>

                    {
                    hasBeenSubmitted && email.length < 2 || email.length > 20 ?
                        <p className="text-danger">Email must be greater then 2 characters</p>:
                        ""
                    }

                    {
                        hasBeenSubmitted && !validateEmail(email) ?
                        <p className="text-danger">Email must be in proper format</p>:
                        ""
                    }

                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password:</label>
                    <input onChange = {(e) => setpass(e.target.value)} type="password" className = "form-control"/>

                    {
                    hasBeenSubmitted && pass.length < 8?
                        <p className="text-danger">Password must be greater then 8 charcters</p>:
                        ""
                }
                </div>
                <div className="form-group">
                    <label htmlFor="conpass">Confirm Password:</label>
                    <input onChange = {(e) => setconpass(e.target.value)} type="password" className = "form-control"/>

                    {
                    hasBeenSubmitted && pass != conpass?
                        <p className="text-danger">Password must match</p>:
                        ""
                }

                </div>
                <br />
                <input className = "btn btn-success m-3" type="submit" value="Register" />
            </form>
            <hr />
        {/* <div className="container">
                <h3>Your info</h3>
                <p>First Name: {fname}</p>
                <p>Last Name: {lname}</p>
                <p>Email: {email}</p>
                <p>Password: {pass}</p>
                <p>Confirm Password: {conpass}</p>
            </div> */}
        </div>
    );
};

export default User;