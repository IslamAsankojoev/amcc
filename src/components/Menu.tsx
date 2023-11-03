import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined'
import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined'
import { Drawer } from 'antd'
import Link from 'next/link'
import React from 'react'

const menu = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'О нас',
    href: '/#about',
  },
  {
    title: 'Результаты',
    href: '/#results',
  },
  {
    title: 'Выводы',
    href: '/#withdrawals',
  },
]

const Menu = () => {
  const [open, setOpen] = React.useState(false)

  const onClose = () => {
    setOpen(false)
  }
  const onOpen = () => {
    setOpen(true)
  }

  return (
    <span>
      <div className="md:flex hidden">
        {menu.map((item, index) => (
          <a key={index} href={item.href} className="block py-2 px-4 text-sm " onClick={onClose}>
            {item.title}
          </a>
        ))}
      </div>
      <div className='md:hidden block'>
        <MenuOutlined className={`${open ? 'hidden' : 'block' } text-xl`} onClick={onOpen} style={{
          zIndex: 10000000,
        }}/>
        <Drawer 
        size='default'
        title={
          <div className='flex justify-between items-center text-white'>
            <span>Меню</span>
            <CloseOutlined onClick={onClose} className='text-xl mr-2'/>
          </div>
        } placement="right" open={open} className='bg-[#04040ec4] backdrop-blur-2xl' classNames={
          {
            header: '[&>div>button]:hidden',
          }
        }>
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-2 px-4 text-sm"
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </Drawer>
      </div>
    </span>
  )
}

export default Menu
