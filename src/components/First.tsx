import { Col, Row, Space } from 'antd'
import React from 'react'
import Image from 'next/image'
import { montserrat, yanone_kaffeesatz } from '@/utils/fonts'
import { links } from '@/utils/constants'

const First = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/trading-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span
        className="overlay"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          backdropFilter: 'blur(3px)',
        }}
      >
        <div className="container">
          <Row justify="center" align="middle">
            <Col
              xs={{
                span: 24,
                order: 1,
              }}
              lg={{
                span: 18,
                order: 1,
              }}
            >
              <Space
                direction="vertical"
                style={{
                  height: '100vh',
                  width: '100%',
                  zIndex: 100,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <h2 className={`text-3xl md:text-4xl mb-6 ${yanone_kaffeesatz.className}`}>
                  Добро пожаловать в мир &nbsp;{' '}
                  <span className={`${montserrat.className} font-bold`}>AMCC</span>
                </h2>
                <p
                  className={`text-sm md:text-lg leading-6 md:leading-8 ${montserrat.className}`}
                >
                  Мир надежного и прибыльного способа инвестирования. У нас есть одна весьма
                  привлекательная особенность:{' '}
                  <span className="text-green-500 font-semibold">каждый день ваш капитал растет на 3.8%</span>.
                  <br />
                  <br />
                  Всё, что вам нужно сделать это следовать нашим сигналам. А несмотря на то, что в
                  выходные дни сигналы могут приходить не всегда, наши профессиональные трейдеры
                  гарантируют вашему успеху. Присоединяйтесь к нам и узнайте, как можно увеличить
                  свой капитал быстро и безопасно.
                </p>
                <br />
                <Space size="large">
                  <a
                    href={links.telegram}
                    target='_blank'
                    className="bg-green-600 hover:bg-green-700 text-white hover:text-white font-bold p-4  rounded-full "
                  >
                    Вступить в группу телеграм
                  </a>
                  <a
                    href="#"
                    target='_blank'
                    className="bg-red-600 text-white hover:text-white font-bold p-4  rounded-full "
                  >
                    Узнать еще
                  </a>
                </Space>
              </Space>
            </Col>
            <Col
              xs={{
                span: 24,
                order: 1,
              }}
              lg={{
                span: 6,
                order: 1,
              }}
            ></Col>
          </Row>
        </div>
      </span>
      <Space
        style={{
          height: '100vh',
          width: '100%',
          zIndex: 100,
        }}
      >
        <br />
      </Space>
    </div>
  )
}

export default First
