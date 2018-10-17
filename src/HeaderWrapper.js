import React from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'
import SubMenu from './SubMenu'
import Search from '@material-ui/icons/Search'
import Close from '@material-ui/icons/Close'

const navBar = [
  { name: 'new in', menus: [] },
  { name: 'charms' },
  { name: 'rings' },
  { name: 'bracelets' },
  { name: 'necklaces' },
  { name: 'earrings' },
  { name: 'collections' },
  { name: 'gifts' },
  { name: 'pandora club' },
  { name: 'universe' }
]

const HeaderWrapper = styled(({ className }) => {
  return (
    <div className={cx('header-wrapper', className)}>
      <div className={'logo-section'}>
        <span className={'text logo upperCase'}>PANDORA</span>
      </div>
      <nav className={'nav-wrapper'}>
        <nav className={'nav-bar'}>
          <div className={'nav-section'}>
            {navBar.map(item => (
              <div className={'hover-item'}>
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall upperCase'}>
                    {item.name}
                  </span>
                </a>
                {/* dropdown section */}
                <div>
                  <div className={'navigation-wrapper'}>
                    <SubMenu data={item} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={'search-button'}>
            <Search className={'search-icon'} />
            <div className={'search-bar'}>
              <form className={'from-input'}>
                <input
                  type="text"
                  placeholder="Search/ Enter product ID"
                  className={'search-input'}
                />
              </form>
              <Close className={'close-button'} />
            </div>
          </div>
        </nav>
      </nav>
    </div>
  )
})(() => ({
  '&.header-wrapper': {
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: 'white'
  },
  '.logo-section': {
    padding: '10px 0px'
  },
  '.nav-item': {
    textDecoration: 'none'
  },
  '.nav-wrapper': {
    borderTop: '1px solid lightgrey',
    borderBottom: '1px solid lightgrey',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  '.nav-bar': {
    display: 'flex',
    justifyContent: 'center',
    width: '85%'
    // position: 'relative'
  },
  'a:hover span.text': {
    color: 'lightgray'
  },
  '.hover-item': {
    flex: 1,
    padding: 16,
    whiteSpace: 'nowrap'
  },
  '.hover-item:hover .navigation-wrapper': {
    display: 'flex',
    justifyContent: 'center',
    visibility: 'visible',
    marginTop: '16px'
  },
  '.navigation-wrapper': {
    backgroundColor: 'white',
    height: 'auto',
    display: 'none',
    position: 'absolute',
    width: '100%',
    left: 0,
    borderTop: '1px solid lightgrey',
    borderBottom: '1px solid lightgrey'
  },
  '.search-button': {
    margin: '0 0 0 auto',
    alignSelf: 'center'
  },
  '.nav-section': {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between'
  },
  '.search-icon': {
    color: 'gray',
    fontSize: '36px'
  },
  '.search-button:hover .search-bar': {
    display: 'flex'
  },
  '.search-bar': {
    backgroundColor: 'lightgrey',
    height: '100%',
    display: 'none',
    position: 'absolute',
    width: '23%',
    top: 0,
    right: '100px'
  },
  '.search-input': {
    height: '89%',
    width: '97%',
    background: 'lightgray',
    border: 'none'
  },
  '.from-input': {
    width: '250px'
  },
  '.close-button': {
    width: '50px',
    height: '30px',
    alignSelf: 'center',
    color: 'gray'
  }
}))

export default HeaderWrapper
