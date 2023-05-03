import { useState, useEffect } from "react";


export default function RndmImg(){
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        async function fetchImg(){
            const response = await fetch ("https://images.pexels.com/photos/3536235/pexels-photo-3536235.jpeg?auto=compress&cs=tinysrgb&w=400");
            const data = await response.json();
            setImgUrl(data.url);
        }
        fetchImg();
    }, [imgUrl]);

    return(
        <div>
        <img src={imgUrl} alt="Random img"/>
        </div>
    )
    }