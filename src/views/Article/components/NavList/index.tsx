/** @format */

import React, { FC } from 'react'
import './style.scss'
//import styles from './style.less';

interface SeniorInfoProps {
  info?: string
}

const NavList: FC<SeniorInfoProps> = props => {
  const { info } = props
  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  const recomandListArr = [
    {
      data: '12-28',
      title: '腾讯light.公益创新挑战赛',
      base: '上海',
      time: '12-28 周一',
      state: '报名中'
    },
    {
      data: '12-16',
      title: 'HarmonyOS 开发者创新大赛',
      base: '其他',
      time: '12-16 周三',
      state: '报名中'
    }
  ]

  const recomandListCom = recomandListArr.map((item, key) => {
    return (
      <div className="activity-recommend-item" key={key}>
        <div className="activity-date">
          <div className="activity-date-wrapper">
            <div className="activity-date-up">DEC</div>
            <div className="activity-date-down">28</div>
          </div>
        </div>
        <div className="activity-detail">
          <div className="activity-detail-title">{item.title}</div>
          <span className="activity-detail-base">{item.base}</span>
          <span className="dot">·</span>
          {item.time}
          <span className="dot">·</span>
          <span className="activity-state">{item.state}</span>
        </div>
      </div>
    )
  })

  return (
    <div className="nav-container">
      <div className="nav-router-box">
        <div className="nav-router-box-item active" >
          <i className="fa fa-newspaper-o" aria-hidden="true"></i>
          <span className="name">为你推荐</span>
        </div>
        <div className="nav-router-box-item " >
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <span className="name">近期热门</span>
        </div>
        <div className="nav-router-box-item ">
          <i className="fa fa-globe" aria-hidden="true"></i>
          <span className="name">最新内容</span>
        </div>
        <div className="nav-router-box-item showChannels visible-xs-block" >
          <i className="fa fa-server" aria-hidden="true"></i>
          <span className="name">技术频道</span>
        </div>
      </div>

      {/*<div className="nav-tech-square">
        <h5 className="nav-tech-square-title">极术社区</h5>
        <div className="nav-tech-square-item ">
          <span className="tech-square-item-icon">
            <img src="https://avatar-static.segmentfault.com/194/030/1940304143-5a72802e507db_small" />
          </span>
          <span>人工智能</span>
        </div>
        <div className="nav-tech-square-item " >
          <span className="tech-square-item-icon">
            <img src="https://avatar-static.segmentfault.com/861/000/861000683-5d7ef19e16178_small" />
          </span>
          <span>Arm 大计算</span>
        </div>

        <div className="nav-tech-square-item ">
          <span className="tech-square-item-icon">
            <i className="fa fa-tags" aria-hidden="true"></i>
          </span>
          <span>更多标签</span>
        </div>
      </div>*/}
    </div>
  )
}

export default NavList
