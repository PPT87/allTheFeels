import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-desktop.png'


const SideNavbar = ({ user, handleLogout, showNav }) =>{
  console.log()

return(
  <>
      {user ?
        <nav className={showNav ? 'sidenav active' : 'sidenav'}>
          <img src={logo} alt="logo" className='logo'/>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to={`/profile/${user.profile}`}>Profile</Link></li>
            <li><Link to="/posts">Home</Link></li>
            <li><Link to="/new">Add Post</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/posts">Home</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}


export default SideNavbar