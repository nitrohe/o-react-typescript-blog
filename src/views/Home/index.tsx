/** @format */

import * as React from 'react'
import './index.scss'

import { Carousel, Layout } from 'antd'

import Routes from '../../routes'
import Header from './components/header'
import Footer from './components/footer'

const { Content } = Layout

interface IState {
  testRef: React.RefObject<Carousel>
}

class Home extends React.Component<unknown, IState> {
  private testRef: React.RefObject<Carousel>
  constructor(props: unknown) {
    super(props)
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.testRef = React.createRef<Carousel>()
    console.log('props****', this.props)
  }

  render(): JSX.Element {
    const { history } = this.props
    return (
      <Layout>
        <Header history={history} />
        <Content style={{ background: '#fff', minHeight: 520, overflow: 'hidden' }}>{Routes()}</Content>
        {/*<Footer />*/}
      </Layout>
    )
  }
}

export default Home
