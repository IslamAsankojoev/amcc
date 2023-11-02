import { Space } from 'antd'
import Image from 'next/image'
import React, { useEffect } from 'react'
import FixedButton from './FixedButton'
import { links } from '@/utils/constants'
import { yanone_kaffeesatz } from '@/utils/fonts'

const Header = () => {
  const [scroll, setScroll] = React.useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      style={{
        width: '100%',
        background: scroll > 20 ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0)',
        transition: 'all 0.3s ease',
        position: 'fixed',
        top:scroll > 0 ? 0 : 20,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        zIndex: 100,
      }}
      className="h-14 md:h-16"
    >
      <div className="container">
        <Space>
          <Image
            src="/logoAMCC.png"
            alt="site-logo"
            width={scroll > 20 ? 140 : 170}
            height={scroll > 20 ? 25 : 40}
            className="hidden md:block"
            style={{
              filter: 'drop-shadow(0px 0px 10px rgba(255,255,255,0.2))',
            }}
          />
          <Image
            src="/logoAMCC.png"
            alt="site-logo"
            width={140}
            height={25}
            className="block md:hidden"
            style={{
              filter: 'drop-shadow(0px 0px 10px rgba(255,255,255,0.2))',
            }}
          />
          <h2 className={`text-lg md:text-2xl ${yanone_kaffeesatz.className}`}>signals</h2>
        </Space>
      </div>
      <FixedButton
        bottom={20}
        right={20}
        onClick={scrollToTop}
        style={{
          opacity: scroll > 0 ? 1 : 0,
          backgroundColor: '#24263990',
        }}
        show={scroll > 0}
      >
        <Image src="/up-arrow.png" alt="up-arrow" width={50} height={50} className='invert scale-50'/>
      </FixedButton>
      {/* <FixedButton bottom={20} left={20} link={links.telegram} style={{
      backgroundColor: '#0088cc',
      opacity: scroll > 0 ? 1 : 0,
      transform: scroll > 0 ? 'scale(1)' : 'scale(0)',
     }}>

     </FixedButton> */}
    </div>
  )
}

export default Header
