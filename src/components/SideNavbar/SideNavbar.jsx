import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-desktop.png'
import { GoHome } from 'react-icons/go'
import { BsPerson, BsPersonPlus } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { VscSignIn } from 'react-icons/vsc'


const SideNavbar = ({ user, handleLogout, showNav }) =>{
  console.log()

return(
  <>
      {user ?
        <nav className={showNav ? 'sidenav active' : 'sidenav'}>
          <img src={logo} alt="logo" className='logo'/>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/posts"><GoHome /> Home</Link></li>
            <li><Link to={`/profile/${user.profile}`}><BsPerson /> Profile</Link></li>
            <li><Link to="/new"><AiOutlinePlusCircle /> Add Post</Link></li>
            <li><Link to="" onClick={handleLogout}><BiLogOut /> LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav className={showNav ? 'sidenav active' : 'sidenav'}>  
          <ul>
            <li><Link to="/posts"><GoHome /> Home</Link></li>
            <li><Link to="/login"><VscSignIn /> Log In</Link></li>
            <li><Link to="/signup"><BsPersonPlus /> Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}


export default SideNavbar