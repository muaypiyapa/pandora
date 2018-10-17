import React, { Component } from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'
import HeaderWrapper from './HeaderWrapper'
import FooterSection from './FooterSection'
import Widget2x2 from './Widget2x2'
import Widget2x1 from './Widget2x1'
import Widget1x1 from './Widget1x1'
import ProductSlider from './ProductSlider'

import MainBannerSection from './MainBannerSection'
import spotImage1 from './assets/spotImage1.jpg'
import spotImage2 from './assets/spotImage2.jpg'
import spotImage3 from './assets/spotImage3.jpg'
import spotImage4 from './assets/spotImage4.jpg'
import spotImage5 from './assets/spotImage5.jpg'
import spotImage6 from './assets/spotImage6.jpg'
class App extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={cx('App', className)}>
        {/* {HeaderWrapper} */}
        <HeaderWrapper className={'header-wrapper'} />
        <div className={'main-banner-section'}>
          <MainBannerSection />
        </div>
        <div className={'background'}>
          <div className={'product-section'}>
            <div className={'product-header'}>
              <div className={'header-product-list'}>
                <div className={'text center black upperCase extraLarge'}>
                  PRESENTING PANDORA REFLEXIONS
                </div>
                <div className={'text center medium'}>
                  Mesh bracelets in glorious metals. Clip on charms to reflect
                  your style.
                </div>
              </div>
              <ProductSlider />
              <div className={'explore-button'}>
                <div className={'text small upperCase'}>explore now</div>
              </div>
            </div>

            <ul className={'spot-img-section'}>
              {/* {list1-1} */}
              <Widget2x2
                image={spotImage1}
                header={'new pandora reflexions'}
                content={`Discover ways to reflect you're style with this season's must have bracelets.`}
                link={'get inspired'}
              />
              {/* {list1-2} */}
              <Widget2x1
                image={spotImage2}
                header={'meet the creators'}
                content={`PANDORA's creative directors discusstheir design
                inspiration this season.`}
                link={'read more'}
              />

              {/* {list1-3} */}
              <Widget1x1
                image={spotImage3}
                header={`pandora shine new \narrivals`}
                link={'explore'}
              />
              {/* {list2-1} */}
              <Widget2x1
                image={spotImage4}
                header={'the autumn collection'}
                content={`Indulge in finely crafted, beautifully detailed jewellery
                in glorious metals.`}
                link={'explore new arrivals'}
              />
              {/* {list2-2} */}
              <li className={'list5'}>
                <div className={'test'}>
                  <div className={'item3'}>
                    <div
                      className={'text center medium upperCase display-text'}
                    >
                      your time to shine
                      <div className={'text center small upperCase'}>
                        browse
                      </div>
                    </div>
                    <img src={spotImage5} alt={'spot-img-3'} />
                  </div>
                </div>
              </li>
              {/* {list2-3} */}
              <li className={'list6'}>
                <div className={'test'}>
                  <img
                    src={spotImage6}
                    alt={'spot-img-2'}
                    className={'spot-image'}
                  />
                  <div className={'spot-text'}>
                    <div className={'text center medium upperCase'}>
                      pandora rose new arrivals
                    </div>
                    <div className={'text center gray superSmall'}>
                      Discover beautiful blush-hued jewelly to illuminate you.
                    </div>
                    <div className={'text center small upperCase'}>browse</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={'footer-section'}>
          <FooterSection />
        </div>
      </div>
    )
  }
}

const StyledApp = styled(App)(() => ({
  '.header-wrapper': {
    zIndex: 1
  },
  '.background': {
    background: '#F6F6F8',
    position: 'relative'
  },
  '.main-banner-section': {
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    background: '#F6F6F8'
  },
  '.header-product-list': {
    padding: '35px 0px'
  },
  '.explore-button': {
    border: '1px solid black',
    width: 260,
    height: 50,
    margin: '30px auto 20px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  '.product-section': {
    width: '75%',
    margin: '0 auto'
  },
  '.spot-img-section': {
    listStyleType: 'disc',
    paddingLeft: 0,
    columns: 2,
    listStyle: 'none',
    marginTop: 0,
    marginBottom: 0
  },
  '.test': {
    height: 'auto',
    // marginRight: 'auto',
    background: 'white',
    marginBottom: 10
  },
  '.spot-text': {
    lineHeight: '50px'
  },
  '.item3': {
    background: 'white',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '30px',
    alignItems: 'center'
  },
  '.display-text': {
    flex: 1
  },
  '.spot-image': {
    width: '100%'
  },
  '.product-header': {
    background: 'white',
    paddingBottom: 20
  }
}))

export default StyledApp
