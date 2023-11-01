import React, { FC } from 'react'

interface FixedButtonProps {
  onClick?: () => void
  link?: string
  left?: number
  bottom: number
  right?: number
  children?: React.ReactNode
  style?: React.CSSProperties
}

const FixedButton: FC<FixedButtonProps> = (props) => {
  const { children, link, onClick, style, ...rest } = props
  return (
    <a
      onClick={onClick}
      href={link}
      className={`${'flex justify-center align-middle fixed z-50 w-12 h-12 bg-green-500 text-white text-center rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:text-white font-semibold cursor-pointer'}`}
      style={{
        ...style,
        ...rest,
      }}
    >
      {children}
    </a>
  )
}

export default FixedButton
