import React from 'react'

function Grids({ image, title, description, gridBtn, cash, cashP }) {
  return (
    <div>
      <div className='gridHolder'>
        <div className='gridCrads'>
          <img src={image} alt='' />
          <h5>{title}</h5>
          <span>{description}</span>
          <div className='priceTag'>
            <div className='cashP'>{cash}</div>
            <div className='cashD'>{cashP}</div>
          </div>
          <button className='button'>{gridBtn}</button>
        </div>
      </div>
    </div>
  );
}

export default Grids