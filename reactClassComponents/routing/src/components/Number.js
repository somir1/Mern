import React from 'react';
import { useParams } from 'react-router';

const Number = () => {
    const {val, color,colors} = useParams();
    console.log("val is this: ", val)
    console.log(color)
    return (
        <div>
        {/* { isNaN(num)?
            <h1>This is not a Number</h1>:
            <h1>The number is: {num}</h1>
        } */}

        {
            (() => {
                if (isNaN(val))
                    return <h1 style = {{color:color, backgroundColor:colors}}>The word is: {val}</h1>
                else
                    return <h1>The number is: {val}</h1>
            })()
        }

        </div>
    );
};

export default Number;