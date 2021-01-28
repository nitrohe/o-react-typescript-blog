/** @format */

import React, { FC } from 'react'

import ArticleList from './components/ArticleList'
import RecomandList from './components/RecomandList'
import NavList from './components/NavList'
import './style.scss'

interface ArticleProps {
  submitting: boolean
}

const Article: FC<ArticleProps> = props => {
  const { submitting } = props
  const [showPublicUsers, setShowPublicUsers] = React.useState(false)

  // const onFinish = (values: { [key: string]: any }) => {
  //   const { dispatch } = props;
  //   dispatch({
  //     type: 'formAndbasicForm/submitRegularForm',
  //     payload: values,
  //   });
  // };

  return (
    <div className="article-layout-container">
      <div className="article-layout-left"> 
        <NavList />
      </div>
      <div className="article-layout-middle">
        <ArticleList />
      </div>
      <div className="article-layout-right">
        <RecomandList />
      </div>
    </div>
  )
}

export default Article
