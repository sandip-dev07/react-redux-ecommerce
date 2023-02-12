import React from 'react'
import './footer.scss'
const Footer = () => {

  const quickShop=[
    "Men",
    'Women',
    'Kids',
    "Electronics"
  ]

  const information=[
    "About us",
    "Privacy",
    "Terms & conditions"
  ]
  const customerService=[
    "FAQ's",
    "Orders and returns",
    'Personal data'

  ]
  

  return (
    <div className='footer-container'>
      <div className="boxOne">
        <h3>Quick Shop</h3>
        <ul>
        {quickShop.map((link) => (
              <li key={link}>{link}</li>
            ))}
        </ul>
      </div>
      <div className="boxTwo">
        <h3>Information</h3>
        <ul>
        {information.map((link) => (
              <li key={link}>{link}</li>
            ))}
        </ul>
      </div>
      <div className="boxThree">
        <h3>Service</h3>
        <ul>
        {customerService.map((link) => (
              <li key={link}>{link}</li>
            ))}
        </ul>
      </div>
      <div className="boxFour">
        <h3>Contact Us</h3>
        <ul>
          <li>Phone: +1 12346586</li>
          <li>Email: xyz@xyz.com</li>
          <li>Address: London, USA</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
