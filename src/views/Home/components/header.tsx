/** @format */

import React, { FC, useState } from 'react'
import { Layout } from 'antd'
import './style.scss'
//import styles from './style.css'

const { Header } = Layout

interface IHeaderProps {
  history: any
}

const HeaderComponent: FC<IHeaderProps> = props => {
  const { history } = props
  const [menuActive, setMenuActive] = useState('')
  const onMenuClick = (key: string): void => {
    history.push(`/${key}`)
    setMenuActive(key)
    // this.props.history.push('/demo1')
  }
  const menuItems = [
    { name: '首页', key: '' },
    { name: '文章', key: 'article' }
  ]

  const liList = menuItems.map((item, index) => (
    <li
      key={item.key}
      className={`menu-item ${item.key === menuActive ? 'active' : ''}`}
      onClick={e => onMenuClick(item.key)}>
      {item.name}
    </li>
  ))
  return (
    <Header
      style={{
        padding: 0,
        height: '56px',
        display: 'flex',
        position: 'absolute',
        zIndex: 9,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'transparent'
      }}>
      <div style={{ flex: '1 1 0' }} className={`menu-nav ${menuActive ? 'menu-site' : ''}`}>
        <a className="menu-logo" href="/">
          {/*<img
            src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
            alt="Nav logo"
          />*/}
        </a>
        <div className="menu-container">
          <ul className="menu-nav-ul">{liList}</ul>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
