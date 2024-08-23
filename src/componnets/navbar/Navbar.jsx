import { useState } from "react"
import "./navbar.scss"
import ListPage from "../../pages/ListPage/ListPage";
import { Link } from "react-router-dom";

import { userData } from "../../lib/dataList";


const user = true;


export default function Navbar() {
    const [show, setShow] = useState(false);

    const handelChange = () => {
        setShow(!show);
    }
  return (
    <>
    <nav>

      <div className="left">
      
        <Link to="/" className="logo">
          <img src="/public/logo 2.png"/>
        </Link>
        <Link to='/'>Home</Link>
        <a href="#">About</a>
        <a href="#">Contact</a>
       <Link to="/List">Hotels</Link>
      </div>

      <div className="right">
      {user ? (
          <div className="user">
            <img
              src={userData.img}
              alt=""
            />
            <span>{userData.name}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/" className="sunmit">Sign in</a>
            <a href="/" className="sunmit register">
              Sign up
            </a>
          </>
        )}


      <div className="menuIcon" onClick={handelChange}>
        <img src="/public/menu 1.png"/>
      </div>
      

      <div className={show ? `menu active` : `menu`}>

        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>

      </div>

      </div>
        
    </nav>

    </>
  )
}
