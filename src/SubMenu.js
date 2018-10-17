import React from 'react'
import styled, { cx } from 'react-emotion'
import './App.css'
import pandora01 from './assets/pandora01.jpg'
import pandora02 from './assets/pandora02.jpg'
import pandora03 from './assets/pandora03.jpg'
import pandora04 from './assets/pandora04.jpg'
import pandora05 from './assets/pandora05.jpg'
import pandora06 from './assets/pandora06.jpg'
import pandora07 from './assets/pandora07.jpg'
import pandora08 from './assets/pandora08.jpg'
import pandora09 from './assets/pandora09.jpg'
import pandora10 from './assets/pandora10.jpg'
import pandora11 from './assets/pandora11.jpg'
import pandora12 from './assets/pandora12.jpg'

const SubMenu = styled(({ className, data }) => {
  console.log('data', data)
  const { name, sub } = data
  console.log('name', name)
  console.log('subbb', sub)
  return (
    <div className={cx('navigation', className)}>
      {name === 'new in' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'new in',
              list: [
                'Reflexions',
                'Autumn',
                'Grains of Life',
                'Regal tales',
                'Snow White and Evil Queen'
              ]
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora01,
              content: 'autumn 2018 collection'
            },
            {
              img: pandora02,
              content: 'presenting pandora reflexions'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'charms' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'category',
              list: [
                'All Charms',
                'Pendant Charms',
                'Spacers',
                'Clips',
                'Safety Chains'
              ]
            },
            {
              listHeader: 'materials',
              list: [
                'All Materials',
                'Sterling Silver Charms',
                'Gold Charms',
                '18k Gold-Plated Charms',
                'PANDORA Rose',
                'Two-Tone',
                'Glass Charms',
                'Charms with Stones'
              ]
            },
            {
              listHeader: 'themes',
              list: [
                'All Themes',
                'Alphabet & Numbers',
                'Animals',
                'Decorative',
                'Fairytale',
                'Family & Friends',
                'Floral'
              ]
            },
            {
              listHeader: 'styles with charms',
              list: [
                'Bracelet Guide',
                'Alphabet Designer',
                'Charm Styling Stories',
                'Create A Perfect Match'
              ]
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora03,
              content: 'all charms'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'rings' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'category',
              list: ['All Rings', 'Band Rings', 'Statement Rings']
            },
            {
              listHeader: 'materials',
              list: [
                'All Materials',
                'Sterling Silver Rings',
                'Gold Rings',
                '18k Gold-Plated Rings',
                'PANDORA Rose',
                'Rings with Stones',
                'Enamel'
              ]
            },
            {
              listHeader: 'style with Rings',
              list: ['Create A Perfect Match', 'Ring Styling Stories']
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora04,
              content: 'all rings'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'bracelets' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'category',
              list: ['All Bracelets', 'Bangles', 'Snake Chain Bracelets']
            },
            {
              listHeader: 'materials',
              list: [
                'All Materials',
                'Sterling Silver Bracelets',
                'Gold Bracelets',
                '18k Gold-Plated Bracelets',
                'PANDORA Rose',
                'Two-Tone',
                'Leather Bracelets'
              ]
            },
            {
              listHeader: 'style with Bracelets',
              list: [
                'Bracelet Guide',
                'Create A Perfect Match',
                'Bracelet Styling Stories'
              ]
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora05,
              content: 'all bracelets'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'necklaces' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'category',
              list: [
                'All Necklaces',
                'Necklace Pendants',
                'Necklaces with Pendants',
                'Necklace Chains'
              ]
            },
            {
              listHeader: 'materials',
              list: [
                'All Materials',
                'Gold Necklaces',
                'Sterling Silver Necklaces',
                '18k Gold-Plated Necklaces',
                'PANDORA Rose',
                'Two-Tone',
                'Enamel',
                'Stones'
              ]
            },
            {
              listHeader: 'style with Necklaces',
              list: [
                'Floating locket jewellery guide',
                'Necklace Styling Stories',
                'Create A Perfect Match'
              ]
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora06,
              content: 'all Necklaces'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'earrings' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'category',
              list: [
                'All Earrings',
                'Hoop Earrings',
                'Stud Earrings',
                'Drop Earrings'
              ]
            },
            {
              listHeader: 'materials',
              list: [
                'All Materials',
                'Sterling Silver',
                'Gold Earrings',
                '18k Gold-Plated Earrings',
                'PANDORA Rose',
                'Two-Tone',
                'Enamel',
                'Stones'
              ]
            },
            {
              listHeader: 'style with earings',
              list: ['Earring Styling Stories', 'Create A Perfect Match']
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora07,
              content: 'all earings'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'collections' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'new in',
              list: [
                'PANDORA Reflexions',
                'Autumn',
                'Snow White and Evil Queen'
              ]
            },
            {
              listHeader: 'materials',
              list: [
                'Signature Jewellery',
                'PANDORA Rose',
                'Petite Memories',
                'PANDORA ESSENCE',
                'Beautiful Birthstones'
              ]
            },
            {
              listHeader: 'SPECIAL COLLECTIONS',
              list: ['Club Charm 2018', 'Disney Collection']
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora08,
              content: 'pandora reflexions collection'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'gifts' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'GIFT INSPIRATION',
              list: [
                'Send a gift idea',
                'Friendship Jewellery',
                'Personalised Gifts',
                'Most popular'
              ]
            },
            {
              listHeader: 'GIFT TOOLS',
              list: [
                'Gift Finder',
                'Find A Wish List',
                'Create A Perfect Match'
              ]
            },
            {
              listHeader: 'GIFT BY PRICE',
              list: [
                'All',
                '0 - 4000',
                '4000 - 8000',
                '8000 - 13000',
                '13000 +'
              ]
            },
            {
              listHeader: 'GIFTS BY OCCASION',
              list: [
                'Mothers Day',
                'Valentines',
                'Christmas',
                'Birthday',
                'Anniversary',
                'Just Because',
                'New Baby'
              ]
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora09,
              content: 'sweat birthday gifts'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'pandora club' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'CLUB',
              list: ['Profile', 'My Wish list', 'My Sizes']
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora10,
              content: 'jewelly guide'
            },
            {
              img: pandora11,
              content: 'club charm 2018'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
      {name === 'universe' && (
        <div className={'sub-menu'}>
          {[
            {
              listHeader: 'STORIES',
              list: [
                'Newest stories',
                'Styling',
                'Craftsmanship',
                'Seasonal Trends',
                'On Our Wishlist',
                'Occasions',
                'Editorial'
              ]
            },
            {
              listHeader: 'JEWELLERY GUIDE',
              list: ['Jewellery Guide', 'Process', 'Care', 'Responsibility']
            },
            {
              listHeader: 'PERSONAL DESIGNS',
              list: ['Alphabet Designer', 'Create A Perfect Match']
            },
            {
              listHeader: 'CAMPAIGN',
              list: [
                'PANDORA Reflexions',
                'Grains of Life',
                'Regal tales',
                'Snow White and Evil Queen',
                'PANDORA friends'
              ]
            }
          ].map(item => (
            <div className={'sub-menu-section'}>
              <div className={'menu-item'}>
                <span className={'text black superSmall upperCase'}>
                  {item.listHeader}
                </span>
              </div>
              {item.list.map(item => (
                <a href="/aa" className={'nav-item'}>
                  <span className={'text black superSmall'}>{item}</span>
                </a>
              ))}
            </div>
          ))}
          {[
            {
              img: pandora12,
              content: 'meet the creators'
            }
          ].map(item => (
            <div className={'banner-section'}>
              <img src={item.img} alt={'pandora01'} />
              <div className={'banner-text text black upperCase Large'}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
})(() => ({
  '&.navigation': {
    width: '85%',
    display: 'flex'
  },
  '.banner-section': {
    position: 'relative',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center'
  },
  '.banner-text': {
    position: 'absolute',
    bottom: 8
  },
  '.sub-menu-section': {
    width: 150,
    textAlign: 'left',
    padding: '0 16px'
  },
  '.nav-item': {
    display: 'block',
    padding: '5px 0'
  },
  '.sub-menu': {
    display: 'flex',
    width: '100%',
    padding: '15px 0px'
  },
  '.menu-item': {
    padding: '0 0 5px 0'
  }
}))

export default SubMenu
