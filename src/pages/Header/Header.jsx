import React from "react"
import { useNavigate } from "react-router-dom"


const Header = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="hidden-container">
        <div className="header">
          <h3>{props.title}</h3>
        </div>
      </div>
      <div className="spacing-block" />
    </>
  )
}

export default Header