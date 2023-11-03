import React, { FC } from 'react'

interface FixedButtonProps {
  onClick?: () => void
  link?: string
  left?: number
  bottom: number
  right?: number
  children?: React.ReactNode
  style?: React.CSSProperties
  show?: boolean
}

const FixedButton: FC<FixedButtonProps> = (props) => {
  const { children, link, onClick, style, show, ...rest } = props
  return (
    <a
      onClick={onClick}
      href={link}
      className={`${'flex justify-center align-middle fixed z-50 w-12 h-12 bg-green-500 opacity-60 hover:opacity-100 text-white text-center rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:text-white font-semibold cursor-pointer'}
      ${show ? 'hover:scale-110 active:scale-100' : 'scale-0'}
      `}
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
