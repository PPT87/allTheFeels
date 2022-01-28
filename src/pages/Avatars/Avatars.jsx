import React from 'react'
import '../Avatars/Avatars.css'

// Assets
import happy from '../../assets/avatars/happy.png'
import mad from '../../assets/avatars/mad.png'
import sad from '../../assets/avatars/sad.png'
import annoyed from '../../assets/avatars/annoyed.png'

const Avatars = (props) => {

  return (
    <div className="popup-container">
      <div className="popup-menu">
        <div className="popup-header">
          <h3>Select Your Avatar</h3>
          <button id="close-button" onClick={props.handlePopup}>X</button>
        </div>
        <img src={props.formData.avatar} alt="emotion-avatar"></img>
        <div className="bottom-ui">
          <select onChange={(e) => props.handleChange(e)} name="avatar" value={props.formData.avatar}>
            <option value={happy}>Happy</option>
            <option value={mad}>Mad</option>
            <option value={sad}>Sad</option>
            <option value={annoyed}>Annoyed</option>
          </select>
          <button onClick={props.handlePopup} type="button">Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Avatars