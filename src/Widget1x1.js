import React from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'

const Widget1x1 = styled(({ className, image, header, link }) => {
  return (
    <li className={cx('list3', className)}>
      <div className={'test'}>
        <div className={'item3'}>
          <div className={'text center medium upperCase display-text'}>
            <p className={'new-line'}>{header}</p>
            <div className={'text center small upperCase'}>{link}</div>
          </div>
          <img src={image} alt={'spot-img-3'} />
        </div>
      </div>
    </li>
  )
})(() => ({
  '&.list3': {
    cursor: 'pointer'
  },
  '.display-text': {
    flex: 1
  },
  '.test': {
    height: 'auto',
    // marginRight: 'auto',
    background: 'white',
    marginBottom: 10
  },
  '.item3': {
    background: 'white',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '30px',
    alignItems: 'center'
  },
  '.new-line': {
    whiteSpace: 'pre-line'
  }
}))

export default Widget1x1
