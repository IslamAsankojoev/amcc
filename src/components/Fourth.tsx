import React from 'react'
import Carousel from './Carousel'
import { Space } from 'antd'
import { roboto, yanone_kaffeesatz } from '@/utils/fonts'

const Fourth = () => {
  return (
    <div className="container">
      <Space
        direction="vertical"
        style={{
          width: '100%',
          padding: '50px 0',
        }}
      >
        <h1
          className={`${yanone_kaffeesatz.className} text-center  text-3xl md:text-4xl font-bold mb-6`}
        >
          Выводы средств - <span className={`${roboto.className} text-yellow-500`}>Binance</span>
        </h1>
        <Carousel
          items={[
            '/binances/binance4.webp',
            '/binances/binance1.webp',
            '/binances/binance2.webp',
            '/binances/binance3.webp',
            '/binances/binance5.webp',
          ]}
          show={{
            mobile: 2,
            tablet: 2,
            desktop: 5,
          }}
        />
      </Space>
      <br />
      <br />
    </div>
  )
}

export default Fourth
