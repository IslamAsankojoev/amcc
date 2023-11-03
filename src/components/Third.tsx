import React from 'react'
import Carousel from './Carousel'
import { Space } from 'antd'
import { roboto, yanone_kaffeesatz } from '@/utils/fonts'

const Third = () => {
  return (
    <div id="results" className="container scroll-m-20">
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
            '/trades/trade1.webp',
            '/trades/trade2.webp',
            '/trades/trade5.webp',
            '/trades/trade6.webp',
            '/trades/trade7.webp',
            '/trades/trade8.webp',
            '/trades/trade9.webp',
            '/trades/trade10.webp',
            '/trades/trade11.webp',
            '/trades/trade13.webp',
            '/trades/trade14.webp',
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
