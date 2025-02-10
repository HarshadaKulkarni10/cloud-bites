import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Why wait in line when you can dine in comfort?<br/> Our cloud kitchen brings you freshly cooked, gourmet meals with just a few clicks.<br/> Let us handle the cooking while you enjoy every bite!</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
