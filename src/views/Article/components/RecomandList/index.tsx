/** @format */

import React, { FC } from 'react'
import './style.scss'
//import styles from './style.less';

interface SeniorInfoProps {
  info?: string
}

const RecomandList: FC<SeniorInfoProps> = props => {
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
    <div className="recomand-container">
      <div className="recomand-wrapper">
        <div className="activity-title">活动推荐</div>
        <div className="activity-recommend-area">{recomandListCom}</div>
      </div>
    </div>
  )
}

export default RecomandList
