import { Col, Row, Space } from 'antd'
import React from 'react'
import Image from 'next/image'
import { montserrat, yanone_kaffeesatz } from '@/utils/fonts'

const Second = () => {
  return (
    <div id="about" className="container scroll-m-10">
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
            <h1 className={`${yanone_kaffeesatz.className} text-2xl md:text-4xl font-bold`}>В чем прикол заработка - <span className="text-green-500">+3.8% каждый день за 5 мин</span></h1>
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
              <span className="text-red-500">Зачем трейдеры нам помогают?</span> - AMCC предлагает систему рефералов, любой трейдер может
              пригласить друга или знакомого который становиться твоим рефералом, и ты получаешь с него комиссию за каждую сделку
              <br />
              <br />
              1) Главный трейдер получает <span className="text-orange-500">комиссию</span> за твои сделки, и сам тоже торгует  <br />
              2) Ты зарабатываешь на <span className="text-orange-500">сигналах</span> (сделки)  <br />
              3) Сайт забирает при выводе ваших денег <span className="text-orange-500">7%</span>
            </p>
          </Col>
        </Row>
      </Space>
    </div>
  )
}

export default Second
