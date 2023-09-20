import React, {useEffect, useState} from "react";
import axios from "axios";
import image from '../Assets/Loading_2.gif'
import '../Compos/Debu.css';


export default function Contact (){
    const [userData, setData] = useState([]);
    const [loading, setLoading]= useState(true);
  
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
        setData(response.data);
        console.log(response);
        setLoading(false);
        });
    }, []);
    return (
        <div className="table content">
            {loading ?(
                <img src={image} alt="loading..."/>
            ):(
                <div className="col-6">
                    {userData.slice(1000).map((getting) => (
                    <tr key={getting.id}>
                        <td>{getting.thumbnailUrl}</td>
                        <td>{getting.url}</td>
                    </tr>
                    ))}
                </div>
            )}
        </div>
  );
}