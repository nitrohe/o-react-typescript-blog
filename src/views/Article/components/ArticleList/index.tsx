/** @format */

import React, { FC } from 'react'
import { LikeOutlined, MessageOutlined } from '@ant-design/icons'

import './style.scss'
//import styles from './style.less';

interface BasicIntroProps {
  info?: string
}

const ArticleList: FC<BasicIntroProps> = props => {
  const { info } = props
  const articleListArr = [
    {
      id: '2',
      title: '一份待签收的邀请 | 移动应用开发问卷调查',
      excerpt:
        ' 无论是内容 APP、社交 APP，还是工具 APP，他们支撑了我们“手机生活”的另一半。在获得这些 App 所提供服务的同时，大多数人会忽视此时此刻，移动开发者们面临着的变化、难题和挑战。',
      img: 'https://image-static.segmentfault.com/381/071/3810712392-a04939ce176b3549_articlex',
      time: '1月22日',
      votes: '10',
      comments: '20',
      author: '20'
    },
    {
      id: '3',
      title: '万万没想到，良许也开挂了',
      excerpt:
        '本来年终总结要在元旦前写的，但最近这段时间一直在看房，买房，办手续，前两天才终于全部弄完了，终于有时间来写总结啦~大家好，我是良许。2020 年很魔幻，各种幺蛾子事件不断出现，大家过的都很不容易。我们被..',
      time: '1月22日',
      votes: '11',
      comments: '21',
      author: '20'
    }
  ]

  const articleListCom = articleListArr.map((item, key) => {
    return (
      <div className="article-wrapper" key={key}>
        {item.img && (
          <div
            className="article-img"
            style={{
              backgroundImage: 'url(https://image-static.segmentfault.com/381/071/3810712392-a04939ce176b3549_articlex)'
            }}></div>
        )}
        <div className="article-title">{item.title}</div>
        <div className="article-excerpt">{item.excerpt}</div>
        <div className="article-meta">
          <LikeOutlined className="wrap-votes"/>
          <span className="votes">{item.votes}</span>
          <MessageOutlined className="wrap-comments"/>
          <span className="comments">{item.comments}</span>
          <span className="author">{item.time}</span>
        </div>
      </div>
    )
  })

  return <div className="article-container">{articleListCom}</div>
}

export default ArticleList
