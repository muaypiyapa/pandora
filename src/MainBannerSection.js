import React from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'
import MainBanner from './MainBanner.jpg'

const MainBannerSection = styled(({ className }) => {
  return (
    <div className={cx('main-banner', className)}>
      <img src={MainBanner} alt={'pandora01'} />
      <div className={'text-container'}>
        <div>
          <div className={'banner-text text black upperCase superLarge'}>
            Presenting pandora <br /> reflextions
          </div>
          <div className={'banner-text text black superSmall'}>
            Reflect your style with new mesh bracelets you can <br /> wear in
            unlimited ways.
          </div>
          <div className={'link'}>
            <a href="/aa" className={'link-item'}>
              <span className={'text black superSmall upperCase'}>browse</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})(() => ({
  '&.main-banner': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    // width: '75%',
    justifyContent: 'center'
  },
  '.text-container': {
    position: 'absolute',
    width: 300,
    height: 200,
    backgroundColor: 'rgb(255, 255, 255)',
    left: 90,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '.link-item': {
    textDecoration: 'none'
  },
  '.link': {
    paddingTop: 20
  }
}))

export default MainBannerSection
