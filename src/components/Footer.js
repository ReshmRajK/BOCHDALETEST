import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div style={{ width: '100vw'}} className='foot_section p-2 text-center'>

      <p>Copyright @ 2000</p>
      <div className='d-flex justify-content-center gap-4'>
        <i className="fa-brands fa-facebook fa-beat-fade font_icon"></i>
        <i className="fa-brands fa-instagram fa-beat-fade font_icon"></i>
        <i className="fa-brands fa-whatsapp fa-beat-fade font_icon"></i>
        <i className="fa-brands fa-linkedin-in fa-beat-fade font_icon"></i>
      </div>

    </div>
  )
}

export default Footer