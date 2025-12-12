import './Navbar.css'
import * as assets from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setSlider }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={assets.menu}
          alt=""
          className="menu-icon"
          onClick={() => setSlider((prev) => !prev)}
        />
        <Link to={`/`} href="">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={assets.search} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.jack} alt="" className="user-icon" />
      </div>
    </nav>
  )
}
export default Navbar
