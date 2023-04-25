import React from "react";
import App from "../App";
import { Name } from "../App";



export function Card(props){

    return(
        <div className = 'Parentbox'>
        <div className = 'Childbox'>
        <img id= 'img'src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'/>
        <p>{props.bio1}</p>
        <h2>{props.name1}</h2>
        <p>{props.Profile1}</p>
        <button onClick={Name}>See more..</button>
        </div>
        </div>
    )
}
