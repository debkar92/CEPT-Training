import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Debu.css';

function Jdata({curritem})
{
  return (
    <div className='container'>
      <div className='table-row'>
        <div className='col'>Sl No</div>
        <div className='col'>Name</div>
      </div>
        {curritem.map((user)=>(
          <div className='table-row'>
            {/* <div key={user.id}></div> */}
            <div className='col'>{user.id}</div>
            <div className='col'><Link to={`/users/${user.id}`}>{user.name}</Link></div>
          </div>
        ))}
    </div>
  )
}
//<Link to={`/users/${user.id}`}>{user.name}</Link>
function UserPage() {
  const [ users, setUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  let userPerPage = 7;
  const pagesVisited = pageNumber * userPerPage;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data);
    });
  }, []);

  const displayUsers = users.slice(pagesVisited, pagesVisited + userPerPage);
  const pageCount = Math.ceil(users.length/userPerPage);
  const changePage = ({selected}) => {setPageNumber(selected);};

  return(
    <div className="text-center mt-9 content">
      <Jdata curritem={displayUsers}/>
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      />
    </div>
  )
}
export default UserPage;
