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

  // const liList = menuItems.map((item, index) => (
  //   <li
  //     key={item.key}
  //     className={`menu-item ${item.key === menuActive ? 'active' : ''}`}
  //     onClick={e => onMenuClick(item.key)}>
  //     {item.name}
  //   </li>
  // ))
  const liTopList = menuItems.map((item, index) => (
    <li className="menu__item" key={item.key}>
      <span className={`${item.key === menuActive ? 'active-nav' : ''}`} onClick={e => onMenuClick(item.key)}>
        {item.name}
      </span>
    </li>
  ))
  const liBottomList = menuItems.map((item, index) => (
    <li className="opts-group" key={item.key}>
      <span className={`${item.key === menuActive ? 'active-nav' : ''}`} onClick={e => onMenuClick(item.key)}>
        {item.name}
      </span>
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
      <div className={`menu-nav ${!menuActive ? 'menu-home' : ''}`}>
        {/*<a className="menu-logo" href="/">
         <img
            src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
            alt="Nav logo"
          />
        </a>*/}
        <div className="bottom-container visible-sm">{liBottomList}</div>
        <div className="menu-container">
          <div className="menu-logo-wrapper">
            <a className={`menu-logo ${!menuActive ? 'menu-hidden' : ''}`} href="/"></a>
          </div>
          <ul className="menu-list hidden-sm">{liTopList}</ul>
          {/*<ul className="menu-nav-ul">{liList}</ul>*/}
        </div>
        <div className={`menu-login hidden-sm ${!menuActive ? 'menu-hidden' : ''}`}>
          <ul>
            <li className="opts__item">
              <a href="/user/login" className="btn-signin">
                立即登录
              </a>
              <a href="/user/register" className="ml10 btn-signup">
                免费注册
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
