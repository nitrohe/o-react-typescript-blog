/** @format */

import * as React from 'react'
import { Layout, Icon, Popover } from 'antd'
import './style.scss'
//import styles from './style.css'

const { Header } = Layout

interface IHeaderProps {
  history: any
}

export default class HeaderComponent extends React.Component<IHeaderProps> {
  onMenuClick = (key: string): void => {
    this.props.history.push(`/${key}`)
    // this.props.history.push('/demo1')
  }
  render() {
    // const { collapsed, toggleMenu, lang, toggleLang, logout } = this.props.props
    const menuItems = [
      { name: '首页', key: 'home' },
      { name: '文章', key: 'article' },
      { name: '测试', key: 'ceshi' }
    ]

    const liList = menuItems.map((item, index) => (
      <li key={item.key} className="menu-item" onClick={e => this.onMenuClick(item.key)}>
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
        <div style={{ flex: '1 1 0' }} className="menu-nav">
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
}
