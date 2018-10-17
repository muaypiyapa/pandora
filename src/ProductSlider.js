import React from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'
import Slider from 'react-slick'
import NextArrow from '@material-ui/icons/NavigateNext'
import PrevArrow from '@material-ui/icons/NavigateBefore'
import Packshot01 from './assets/packshot01.jpeg'
import Packshot02 from './assets/packshot02.jpeg'
import Packshot03 from './assets/packshot03.jpeg'
import Packshot04 from './assets/packshot04.jpeg'
import Packshot05 from './assets/packshot05.jpeg'
import Packshot06 from './assets/packshot06.jpeg'
import Packshot07 from './assets/packshot07.jpeg'
import Packshot08 from './assets/packshot08.jpeg'
import Packshot09 from './assets/packshot09.jpeg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        border: '1px solid gray',
        width: 50,
        height: 50
      }}
      onClick={onClick}
    >
      <NextArrow className={'next-icon'} />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        border: '1px solid gray',
        width: 50,
        height: 50,
        zIndex: 10
      }}
      onClick={onClick}
    >
      <PrevArrow className={'next-icon'} />
    </div>
  )
}

const settings = {
  centerMode: true,
  centerPadding: '60px',
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const ProductSlider = styled(({ className }) => {
  return (
    <Slider {...settings} className={cx('product-slider', className)}>
      {[
        {
          img: Packshot01,
          price: '1,400.00 thb'
        },
        {
          img: Packshot02,
          price: '2,050.00 thb'
        },
        {
          img: Packshot03,
          price: '1,850.00 thb'
        },
        {
          img: Packshot04,
          price: '1,850.00 thb'
        },
        {
          img: Packshot05,
          price: '1,600.00 thb'
        },
        {
          img: Packshot06,
          price: '6,800.00 thb'
        },
        {
          img: Packshot07,
          price: '2,300.00 thb'
        },
        {
          img: Packshot08,
          price: '2,050.00 thb'
        },
        {
          img: Packshot09,
          price: '1,600.00 thb'
        }
      ].map(product => (
        <div className={'product-card'}>
          <img src={product.img} className={'img-packshot'} />
          <div className={'text superSmall center upperCase price'}>
            {product.price}
          </div>
        </div>
      ))}
      {/* <div className={'product-card'} />
      <div className={'product-card'} />
      <div className={'product-card'} />
      <div className={'product-card'} />
      <div className={'product-card'} /> */}
    </Slider>
  )
})(() => ({
  '.product-card': {
    height: 250,
    border: '1px solid lightgray',
    width: '90% !important',
    margin: 'auto 5%'
  },
  '.img-packshot': {
    width: '80%',
    height: '80%',
    objectFit: 'contain',
    margin: '10% auto 0 auto'
  },
  '.price': {
    marginTop: '-15px'
  },
  '.slick-next :before': {
    content: 'none'
  },
  '.next-icon': {
    color: 'black',
    width: '40px',
    marginTop: '-15px',
    marginLeft: '5px',
    height: '40px'
  }
}))

export default ProductSlider
