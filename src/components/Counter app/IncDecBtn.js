import React, { Fragment, useState } from "react";

export default function Counter(){

    const[count, setCount] = useState(0)

    function Increase(){
       return(
        setCount(count + 1)
        ) 
    }

    function Decrease(){
        return(
            count != 0 ? setCount(count - 1) : setCount(0)
        )
    }


    return(
        <Fragment id= 'app'>
        <button onClick={Increase}>Click to Increase</button>
        <p>Count: {count}</p>
        <button onClick={Decrease}>Click to Decrease</button>
        </Fragment>

    )
}