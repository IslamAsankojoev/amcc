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
            <h1 className={`${yanone_kaffeesatz.className} text-2xl md:text-4xl font-bold`}>В чем прикол заработка - <span className="text-green-500">+3% каждый день за 5 мин</span></h1>
            <p className={`${montserrat.className}`}>
              <br />
              У нас есть сигналы которые мы скидываем каждый день в группу, потом вы используя эти сигналы, делаете сделки со 
              <span className="text-green-500"> 3% </span>
               профитом
              <br />
              <br />
              <span className="text-blue-500">Трейдинг</span> - это <a href="https://gerchik.com/stati/trejding-eto-chto-takoe-ponyatnym-yazykom" className='underline' target='_blank'>Купля-продажа финансовых активов - валюты, криптовалюты и акции</a>
              <br />
              <br />
              Вы будете трейдить, только прогнозы ставятся опытными
              трейдерами, а мы за счет их прогнозов мы можем безопасно получить профит
              <br />
              <br />
              <span className="text-red-500">Зачем трейдеры нам помогают?</span> - AMCC предлагает систему рефералов, любой трейдер может
              пригласить друга или знакомого который становиться твоим рефералом, и ты получаешь с него комиссию за каждую сделку
              <br />
              <br />
              1) Главный трейдер получает <span className="text-orange-500">комиссию</span> за твои сделки, и сам тоже торгует  <br />
              2) Ты зарабатываешь на <span className="text-orange-500">сигналах</span> (трейд)  <br />
              3) Сайт забирает при выводе  <span className="text-orange-500">7%</span> от вашей суммы  <br />
              4) <span className="text-green-300">Все в плюсе, все довольны ✅</span>  <br />
            </p>
          </Col>
        </Row>
      </Space>
    </div>
  )
}

export default Second
