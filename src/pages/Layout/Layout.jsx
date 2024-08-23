import "./layout.scss";
import Navbar from "../../componnets/navbar/Navbar";



export default function Layout({children}) {
  return (
    <div className="layout">
    <div className='navbar'>
      <Navbar />
    </div>
    <div className='content'>
        {children}
    </div>
    </div>
  )
}
