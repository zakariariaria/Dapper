import React from 'react'
import '../Styles/Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className='popup-inner'>
            <label className="close-btn" onClick={() => props.setTrigger(false)}>X</label>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup
