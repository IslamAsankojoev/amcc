import { Space } from 'antd'
import React from 'react'

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '50px 0',
        background: 'rgb(27 34 50 / 90%)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="container">
          <p className="text-center text-xs md:text-lg ">
            @2023 AMCC - All Rights Reserved 
            <span className='md:inline-block block'> &nbsp;-&nbsp; </span>
            <a href="https://t.me/uclami" target="_blank" className="text-blue-500">
              made by Islam Asankojoev
            </a>
          </p>
      </div>
    </div>
  )
}

export default Footer
