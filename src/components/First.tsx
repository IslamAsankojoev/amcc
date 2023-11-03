import { Col, Modal, Row, Space } from 'antd'
import React from 'react'
import Image from 'next/image'
import { montserrat, yanone_kaffeesatz } from '@/utils/fonts'
import { links } from '@/utils/constants'

const First = () => {
  const [modalOpen, setModalOpen] = React.useState(false)

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
          backdropFilter: 'blur(5px)',
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
              <div
                style={{
                  height: '100vh',
                  width: '100%',
                  zIndex: 100,
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <h2 className={`text-3xl md:text-4xl ${yanone_kaffeesatz.className}`}>
                  Добро пожаловать в мир &nbsp;{' '}
                  <span className={`${montserrat.className} font-bold`}>AMCC</span>
                </h2>
                <p className={`text-sm md:text-sm leading-6 md:leading-8 ${montserrat.className}`}>
                  Мир надежного и прибыльного способа инвестирования. У нас есть одна весьма
                  привлекательная особенность:{' '}
                  <span className="text-green-500 font-semibold">
                    каждый день ваш капитал растет на 3.8%
                  </span>
                  .
                  <span className="mb-4 block" />
                  Всё, что вам нужно сделать это следовать нашим сигналам. А несмотря на то, что в
                  выходные дни сигналы могут приходить не всегда, наши профессиональные трейдеры
                  гарантируют вашему успеху. Присоединяйтесь к нам и узнайте, как можно увеличить
                  свой капитал быстро и безопасно.
                  <br />
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      setModalOpen(true)
                    }}
                  >
                    Проверено NFA
                  </span>
                </p>
                <br />
                <Space size="large" wrap>
                  <a
                    href={links.telegram}
                    target="_blank"
                    className="bg-green-600 hover:bg-green-700 text-white hover:text-white font-semibold md:font-bold p-3 md:p-4 rounded-full inline-block"
                  >
                    Вступить в группу телеграм
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="bg-red-600 text-white hover:text-white font-semibold md:font-bold p-3 md:p-4 rounded-full inline-block"
                  >
                    Узнать еще
                  </a>
                </Space>
              </div>
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
        <Modal
        classNames={{
          footer: 'hidden',
        }}
        width={400}
          open={modalOpen}
          onOk={() => {
            setModalOpen(false)
          }}
          onCancel={() => {
            setModalOpen(false)
          }}
        >
          <Image src="/nfa.jpeg" alt="nfa" width={400} height={600} />
        </Modal>
        <br />
      </Space>
    </div>
  )
}

export default First
