import { Card } from 'antd'
import Image from 'next/image'
import React, { Component, FC } from 'react'
import Slider from 'react-slick'

interface CarouselProps {
  items?: string[]
  show?: {
    mobile: number
    tablet: number
    desktop: number
  }
}

interface Arrow {
  onClick: () => void
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const slider = React.useRef<Slider>(null)
  const { items = [], show } = props

  const NextArrow: FC<Arrow> = ({ onClick }) => {
    return (
      <div
        className={`
      absolute 
      top-1/2 
      right-0 
      z-10 
      w-8 
      h-8 
      md:w-12
      md:h-12
      cursor-pointer 
      rounded-full 
      bg-slate-900 
      hover:bg-slate-800
      transition
      translate-x-1/2
      -translate-y-1/3
      rotate-90
      hover:scale-110
      active:scale-100
      `}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={onClick}
      >
        <Image
          src="/up-arrow.png"
          alt="up-arrow"
          width={22}
          height={22}
          className="invert md:block hidden"
        />
        <Image
          src="/up-arrow.png"
          alt="up-arrow"
          width={15}
          height={15}
          className="invert md:hidden block"
        />
      </div>
    )
  }

  const PrevArrow: FC<Arrow> = ({ onClick }) => {
    return (
      <div
        className={`
        absolute 
        top-1/2 
        left-0 
        z-10 
        w-8
        h-8 
        md:w-12
        md:h-12
        cursor-pointer 
        rounded-full 
        bg-slate-900 
        hover:bg-slate-800
        transition
        -translate-x-1/3
        -translate-y-1/3
        -rotate-90
        hover:scale-110
        active:scale-100
        `}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={onClick}
      >
        <Image
          src="/up-arrow.png"
          alt="up-arrow"
          width={22}
          height={22}
          className="invert md:block hidden"
        />
        <Image
          src="/up-arrow.png"
          alt="up-arrow"
          width={15}
          height={15}
          className="invert md:hidden block"
        />
      </div>
    )
  }

  const settings = {
    className: 'center' + JSON.stringify(props),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: show?.desktop || 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: show?.tablet || 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: show?.mobile || 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <NextArrow
        onClick={() => {
          slider?.current?.slickNext()
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        onClick={() => {
          slider?.current?.slickPrev()
        }}
      />
    ),
  }

  return (
    <Slider
      {...settings}
      className="
      [&>.slick-list>.slick-track]:flex 
      [&>.slick-list>.slick-track]:gap-3 
      [&>.slick-dots>li>button]:before:bg-slate-50 
      [&>.slick-dots>li>button]:before:w-2
      [&>.slick-dots>li>button]:before:h-2
      [&>.slick-dots>li>button]:before:rounded-full
      [&>.slick-dots]:-bottom-10
      "
      ref={slider}
    >
      {items?.map((child, id) => (
        <Card
          key={id}
          bordered={false}
          cover={
            <Image
              alt="trade"
              src={child}
              width={200}
              height={400}
              className="saturate-150 border-1 rounded-lg"
            />
          }
          className="[&>.ant-card-body]:hidden bg-inherit"
        />
      ))}
    </Slider>
  )
}
export default Carousel
