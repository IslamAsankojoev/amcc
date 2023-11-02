import React from 'react'
import Carousel from './Carousel'
import { Space } from 'antd'
import { roboto, yanone_kaffeesatz } from '@/utils/fonts'

const Third = () => {
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
          Наши результаты сигналов - <span className={`${roboto.className} text-blue-500`}>AMCC</span>
        </h1>
        <Carousel
          items={[
            '/trades/trade1.jpg',
            '/trades/trade2.jpg',
            '/trades/trade5.jpg',
            '/trades/trade6.jpg',
            '/trades/trade7.jpg',
            '/trades/trade8.jpg',
            '/trades/trade9.jpg',
            '/trades/trade10.jpg',
            '/trades/trade11.jpg',
            '/trades/trade13.jpg',
            '/trades/trade14.jpg',
          ]}
          show={{
            mobile: 2,
            tablet: 2,
            desktop: 5,
          }}
        />
      </Space>
    </div>
  )
}

export default Third
