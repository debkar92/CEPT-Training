import React, {useState, useEffect} from "react";
import axios from "axios";
import '../Compos/Debu.css';

const About = () => {
    // <h1 style={{fontSize:"40px", textAlign:"center"}}>About</h1>
    const [count, setCount] = useState(0);
    const [userData, setData] = useState([]);
    const [newData, setNew] = useState([]);

    useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/albums")
                    .then((album)=>(setNew(album.data)))},[])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((users)=>(setData(users.data)))

    const getCount = () => (setCount(count+1))

    if (count > 3) {
        return(
            <div className="content">
                <p>{count}</p>
                <button onClick={getCount}>Submit</button>
               <br/>

                <h2>With UserEffect</h2>
                <table>
                <thead>
                    <tr className="border-double border-4 border-emerald-700">
                        <th className="border-double border-4 border-emerald-700">ID</th>
                        <th className="border-double border-4 border-emerald-700">Title</th>
                        <th className="border-double border-4 border-emerald-700">UserID</th>
                    </tr>
                </thead>
                <tbody>
                    {newData.map(item => (
                        <tr className="border-double border-4 border-emerald-700">
                            <td className="border-double border-4 border-emerald-700">{ item.id }</td>
                            <td className="border-double border-4 border-emerald-700">{ item.title }</td>
                            <td className="border-double border-4 border-emerald-700">{ item.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
                
        )
    }
    else {
        return(
            <div className="content">
                <p>{count}</p>
                <button onClick={getCount}>Submit</button>
                <h2>Without UserEffect</h2><br/><br/>


                <table>
                <thead>
                    <tr className="border-double border-4 border-emerald-700">
                    <th className="border-double border-4 border-emerald-700">ID</th>
                        <th className="border-double border-4 border-emerald-700">Name</th>
                        <th className="border-double border-4 border-emerald-700">Username</th>
                        <th className="border-double border-4 border-emerald-700">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(item => (
                        <tr className="border-double border-4 border-emerald-700">
                            <td className="border-double border-4 border-emerald-700">{ item.id }</td>
                            <td className="border-double border-4 border-emerald-700">{ item.name }</td>
                            <td className="border-double border-4 border-emerald-700">{ item.username}</td>
                            <td className="border-double border-4 border-emerald-700">{ item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
                
        )
    }
}
export default About