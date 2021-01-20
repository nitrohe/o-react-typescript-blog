/** @format */

import React, { FC } from 'react'
import './style.scss'
//import styles from './style.less';

interface BasicIntroProps {
  info?: string
}

const BasicInfo: FC<BasicIntroProps> = props => {
  const { info } = props
  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="basicinfo-container">
      <div className="basicinfo-part1">
        <div className="basicinfo-part1-left">
          <div className="title1">
            Where the world
            <br />
            builds software
          </div>
          <div className="title2">
            Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most
            advanced development platform in the&nbsp;world.
          </div>
        </div>
        <div className="basicinfo-part1-right">
          <img
            srcSet="https://assets.fastgit.org/images/modules/site/home/globe-700.jpg 700w"
            sizes="(max-width: 700px) 70vw, 700px"
            src="./src/assets/img/globe.jpg"
            alt="Planet earth with visualization of GitHub activity crossing the globe"
            loading="lazy"
            hidden=""
          />
        </div>
        <div className="basicinfo-part1-glow">
          <img
            src="./src/assets/img/hero-glow.svg"
            alt="Glowing universe"
            className="position-absolute home-hero-glow events-none z-1"
          />
        </div>
      </div>
      <div className="basicinfo-part2">
        <div className="basicinfo-part2-left">
          <div className="basicinfo-part2-item">
            <h2 className="label1">
              56<span className="text-white-fade">+</span> million
            </h2>
            <p className="label2">Developers</p>
          </div>
          <div className="basicinfo-part2-item">
            <h2 className="label1">
              3<span className="text-white-fade">+</span> million
            </h2>
            <p className="label2">Organizations</p>
          </div>
          <div className="basicinfo-part2-item">
            <h2 className="label1">
              100<span className="text-white-fade">+</span> million
            </h2>
            <p className="label2">Repositories</p>
          </div>
          <div className="basicinfo-part2-item">
            <h3 className="label1">72%</h3>
            <p className="label2">Fortune 50</p>
          </div>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
          className="position-absolute width-full z-1">
          <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
        </svg>
      </div>
      <div className="basicinfo-part3">
        <div className="basicinfo-part3-wraper">
          <div className="basicinfo-part3-wraper-left">
            <div className="label1">
              <span className="text-gray-mktg">Build like the best with</span>{' '}
              <span className="no-wrap">GitHub Enterprise</span>
            </div>
            <div className="label2">
              Take collaboration to the next level with security and administrative features built for teams.
            </div>
          </div>
          <div className="basicinfo-part3-wraper-right">
            <img src="./src/assets/img/enterprise-city-w-logos.jpg" alt="Futuristic city scape" loading="lazy" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default BasicInfo
