/** @format */

import * as React from 'react'

import Test2 from '@components/Test2'
import BasicInfo from './components/BasicInfo'
import SeniorInfo from './components/SeniorInfo'

class About extends React.Component {
  render() {
    return (
      <div>
        <BasicInfo />
        <SeniorInfo />
      </div>
    )
  }
}

export default About
