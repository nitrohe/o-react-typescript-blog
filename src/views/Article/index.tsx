/** @format */

import React, { FC } from 'react'

import ArticleList from './components/ArticleList'

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
    <>
      <ArticleList />
    </>
  )
}

export default Article
