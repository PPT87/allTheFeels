import React from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate } from "react-router-dom"
import SideNavbar from '../../components/SideNavbar/SideNavbar'


const Header = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="hidden-container">
        <div className="header">
          <SideNavbar showNav={props.showNav} user={props.user} />
          <GiHamburgerMenu onClick={() => props.setShowNav(!props.showNav)}/>
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="spacing-block" />
    </>
  )
}

export default Header