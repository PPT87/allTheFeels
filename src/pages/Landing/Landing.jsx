import '../Landing/LandingStyle.css'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo/logo.png'

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="landing-elements">
        <img className="logo-splash" src={Logo} alt="logo"></img>
        <h1>All The Feels</h1>
        <div className="landing-button-container">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
