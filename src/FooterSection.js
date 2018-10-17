import React from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'
// import footer from ',/footer01.jpg'
import footer02 from './assets/footer02.jpg'
import footer03 from './assets/footer03.jpg'
import footer01 from './assets/footer01.jpg'

const FooterSection = styled(({ className }) => {
  return (
    <div className={cx('footer', className)}>
      <div className={'footer-section'}>
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'BRACELETS',
              list: [
                '> Bangle',
                '> Gold',
                '> Leather',
                '> Silver',
                '> Snake chain'
              ]
            },
            {
              listHeader: 'CHARMS',
              list: ['> Dangle', '> Silver', '> Glass', '> Gold', '> Stones']
            },
            {
              listHeader: 'EARRINGS',
              list: ['> Gold', '> Drops', '> Hoops', '> Stones', '> Studs']
            },
            {
              listHeader: 'NECKLACES AND PENDANTS',
              list: [
                '> Chains',
                '> Gold',
                '> Pendents',
                '> Necklaces with pendant',
                '> Silver'
              ]
            },
            {
              listHeader: 'RINGS',
              list: ['> Band', '> Gold', '> Silver', '> Statement', '> Stones']
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text white large upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'link-item'}>
                  <span className={'text white superSmall'}>{item}</span>
                </a>
              ))}
              <div className={'bottom'}>
                <a href="/aa" className={'link-item'}>
                  <span className={'text white superSmall'}>> Newest</span>
                </a>
                <a href="/aa" className={'link-item'}>
                  <span className={'text white superSmall'}>> Popular</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={'contact-section'}>
        <div className={'follow-pandora'}>
          <div>
            <img src={footer01} className={'img-logo'} />
          </div>
          <div>
            <div className={'text small upperCase'}>follow pandora</div>
            <ul className={'follow-list'}>
              <li>
                <div className={'text superSmall upperCase'}>facebook</div>
              </li>
              <li>
                <div className={'text superSmall upperCase'}>pinterest</div>
              </li>
              <li>
                <div className={'text superSmall upperCase'}>youtube</div>
              </li>
              <li>
                <div className={'text superSmall upperCase'}>instagram</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={'location'}>
          <img src={footer02} className={'img-language'} />
          <div className={'text small upperCase'}>
            change location
            <div className={'button-wrapper'}>
              <button className={'text small button'}>Change location</button>
            </div>
          </div>
        </div>
        <div className={'find-store'}>
          <img src={footer03} className={'pin-location'} />
          <div className={'text small upperCase'}>
            find your pandora store:
            <form className={'from-input'}>
              <input
                type="text"
                placeholder="Zip code/ City"
                className={'search-input'}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
})(() => ({
  '.footer-section': {
    background: '#524852',
    height: 260,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  '.link-item': {
    display: 'block',
    textDecoration: 'none'
  },
  '.sub-menu': {
    display: 'flex',
    paddingTop: 30
  },
  '.sub-menu-section': {
    width: 150,
    textAlign: 'left',
    paddingRight: 20
  },
  '.menu-item': {
    height: 50
  },
  '.contact-section': {
    display: 'flex',
    width: '75%',
    margin: '20px auto'
  },
  '.follow-pandora': {
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    borderRight: '1px solid lightgray'
  },
  '.location': {
    width: '100%',
    height: '60px',
    justifyContent: 'center',
    borderRight: '1px solid lightgray',
    display: 'flex'
  },
  '.find-store': {
    width: '100%',
    height: 100,
    display: 'flex'
  },
  '.detail': {
    width: '100%'
  },
  '.bottom': {
    paddingTop: 15
  },
  '.follow-list': {
    listStyle: 'none',
    columns: 2,
    paddingLeft: 0,
    marginTop: 5
  },
  '.img-language': {
    width: 130,
    height: '100px',
    marginTop: '-20px',
    marginLeft: '-20px'
  },
  '.button': {
    height: 30,
    width: 132
  },
  '.button-wrapper': {
    paddingTop: 10
  },
  '.img-logo': {
    width: 70,
    marginTop: '-8px'
  },
  '.pin-location': {
    height: '90px',
    marginTop: '-20px'
  },
  '.search-input': {
    width: '-webkit-fill-available',
    height: '28px',
    marginTop: '10px',
    border: 'none',
    background: 'lightgray'
  }
}))

export default FooterSection
