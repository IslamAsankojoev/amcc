import { Col, Row, Space } from 'antd'
import React from 'react'
import Image from 'next/image'
import { montserrat, yanone_kaffeesatz } from '@/utils/fonts'

const Second = () => {
  return (
    <div className="container">
      <Space
        direction="vertical"
        style={{
          padding: '100px 0',
        }}
      >
        <Row justify='center' align='middle' gutter={[16, 46]}>
          <Col xs={{
            span: 24,
            order: 2,
          }}
          lg={{
            span: 10,
            order: 1,
          }}
          
          >
            <Image src="/mobile-trade.png" alt="mobile-trade" width={400} height={800} />
          </Col>
          <Col xs={{
            span: 24,
            order: 1,
          }}
          lg={{
            span: 14,
            order: 2,
          }}
          >
            <h1 className={`${yanone_kaffeesatz.className} text-2xl md:text-4xl font-bold`}>В чем прикол заработка - +3.8% каждый день за 5 мин</h1>
            <p className={`${montserrat.className}`}>
              <br />
              У нас есть сигналы которые мы скидываем каждый день в группу, но суббота и воскресенье
              есть шанс что не придет сигнал, потом вы использую эти сигналы и делаете сделки со 
              <span className="text-green-500"> 100% </span>
               профитом
              <br />
              <br />
              Если вы попали в нашу группу то учитывая наш подбор, думаю ты знаешь что такое
              трейдинг (Купля-продажа финансовых активов - валюты, криптовалюты и акции)
              <br />
              <br />
              Вот на чем вы будете зарабатывать - трейдинг, только прогнозы ставятся опытными
              трейдерами, а мы за счет их прогнозов мы можем безопасно трейдить и заработать
              <br />
              <br />
              Зачем трейдеры нам помогают? - AMCC предлагает систему рефералов, любой трейдер может
              пригласить друга или знакомого который становиться твоим рефералом, да эта пирамида:
              <br />
              <br />
              1) Главный трейдер получает комиссию за твои сделки, и сам тоже торгует 2) Ты
              зарабатываешь на сигналах (сделки) 3) Сайт забирает при выводе ваших денег 7%
            </p>
          </Col>
        </Row>
      </Space>
    </div>
  )
}

export default Second
