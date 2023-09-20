import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Compos/Login";
import Main from "./Compos/Main";
import Home from "./Compos/Home";
import Services from "./Compos/Services";
import About from "./Compos/About";
import Contact from "./Compos/Contact";
import Data from "./Compos/Data";
import UserPage from "./Compos/UserPage";
import UserDetails from "./Compos/UserDetails";
import BagReceive from "./Compos/BagReceive";
import BagOpen from "./Compos/BagOpen";
import BagClose from "./Compos/BagClose";
import BagDispatch from "./Compos/BagDispatch";

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/users' element={<UserPage/>}/>
        <Route path='/users/:userId' element={<UserDetails/>}/>
        <Route path='/br' element={<BagReceive/>}/>
        <Route path='/bo' element={<BagOpen/>}/>
        <Route path='/bc' element={<BagClose/>}/>
        <Route path='/bd' element={<BagDispatch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
