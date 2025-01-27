import React from 'react'
import "./SettingSection.css"

const SettingSection = () => {
  return (
    <div className='setting-section'>
      <button className="setting-privacy">Privacy</button>
      <div className='text-lg font-semibold'>Authorized applications</div>
      <div>You do not have any authorized applications</div>
      <button className="setting-logout">Logout</button>
    </div>
  );
}

export default SettingSection