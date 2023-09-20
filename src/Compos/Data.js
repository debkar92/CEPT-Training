//import React, {useEffect, useState} from "react";
import React, {useState} from "react";
import axios from "axios";
import '../Compos/Debu.css';

const Data = () => {
    const [userData, setData] = useState([]);
    const portal = 'https://jsonplaceholder.typicode.com/users?id=';
    const [num, setNum] =useState(0);

    const setValue = event => (setNum(event.target.value))
    const handleKeyDown = event => {
        if(event.key === 'Enter'){
            axios.get(portal+num).then((debu)=>{setData(debu.data)})
        }
    }
    
    // useEffect(() =>{axios.get
    //     (portal,{params: {id: 2}}).then((response)=>{setData(response.data);
    //     })},[])
        // useEffect(() =>{axios.get
        //     (portal+id).then((response) => {setData(response.data);
        //     })},[])
        return(
            <div className="text-center mt-11 content">
                <label>ID : </label>
                <input type="text" value={num}
                    onChange={setValue} onKeyDown={handleKeyDown}/>
                <table className='text-center'>
                    <thead className='text-center'>
                        {userData.map((getting) => {
                            return(
                                <tr key={getting.id} >
                                    <td >
                                    {`${getting.id})Username: ${getting.name}`}
                                    </td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            </div>
            )
    // const [userData, setData] = useState(0);
    // useEffect(() =>{console.log("Call useEffect")})

    //function increment (){setData(userData+1)}
    // const increment = () => {setData(userData+1)}

    //     return(
    //         <div className="text-center mt-9">
    //             <h2>{userData}</h2>
    //             <button onClick={increment}>Click</button>
    //         </div>
    //     )
}

// const Data = () => {
//     const [userData, setData] = useState([]);
//     const [Meta, setMeta] = useState("Hello CEPT MYSURU");

//     useEffect (() => {axios.get
//         ("https://jsonplaceholder.typicode.com/users").then
//         ((response) => {setData(response.data); });
//     },[]);
//     function buttonClick (){
//         setMeta("Hiii CEPT");
//         //setMeta("Good Morning");
//     }
//     return(
//         <div className=" mt-9 pl-40">
//             <table>
//                 <thead>
//                     <tr className="border-double border-4 border-emerald-700">
//                         <th className="border-double border-4 border-emerald-700">ID</th>
//                         <th className="border-double border-4 border-emerald-700">Name</th>
//                         <th className="border-double border-4 border-emerald-700">Username</th>
//                         <th className="border-double border-4 border-emerald-700">Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {userData.slice().reverse().map(item => (
//                         <tr className="border-double border-4 border-emerald-700">
//                             <td className="border-double border-4 border-emerald-700">{ item.id }</td>
//                             <td className="border-double border-4 border-emerald-700">{ item.name }</td>
//                             <td className="border-double border-4 border-emerald-700">{ item.username}</td>
//                             <td className="border-double border-4 border-emerald-700">{ item.email}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {/* <h2>{userData.map((deb) => {return(<div>{`${deb.id}`}</div>)})}</h2> */}
//             <p>{Meta}</p>
//             <button onClick={buttonClick}>Click Here</button>
//         </div>
//    )
//}
export default Data