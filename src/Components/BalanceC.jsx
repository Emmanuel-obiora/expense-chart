import React from 'react';
import Logo from '../images/logo.svg';

const Balance = () => {
  return (
    <div className='bal'>
        <div className="bal-left">
            <small>My Balance</small>
            <span>$921.48</span>
        </div>
        <img src={Logo} alt="Logo" className='bal-right' />
    </div>
  )
}

export default Balance