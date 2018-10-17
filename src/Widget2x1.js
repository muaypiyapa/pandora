import React from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'

const Widget2x1 = styled(({ className, image, header, content, link }) => {
  return (
    <li className={cx('list2', className)}>
      <div className={'test'}>
        <img src={image} alt={'spot-img-1'} className={'spot-image'} />
        <div className={'spot-text'}>
          <div className={'text center medium upperCase'}>{header}</div>
          <div className={'text center gray superSmall'}>{content}</div>
          <div className={'text center small upperCase'}>{link}</div>
        </div>
      </div>
    </li>
  )
})(() => ({
  '&.list2': {
    cursor: 'pointer'
  },
  '.spot-image': {
    width: '100%'
  },
  '.spot-text': {
    lineHeight: '50px'
  },
  '.test': {
    height: 'auto',
    // marginRight: 'auto',
    background: 'white',
    marginBottom: 10
  }
}))

export default Widget2x1
