import React from 'react'
import "./OptionCard.css"

const OptionCard = ({image, title}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className="option-card">
        <img className='w-16' src={image} alt="Hello" />
      </div>
      <div className='pt-2 font-semibold text-sm'>{title}</div>
    </div>
  );
}

export default OptionCard;