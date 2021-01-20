/** @format */

import React, { FC } from 'react'
import './style.scss'
//import styles from './style.less';

interface SeniorInfoProps {
  info?: string
}

const SeniorInfo: FC<SeniorInfoProps> = props => {
  const { info } = props
  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="seniorinfo-container">

      <div className="seniorinfo-nav">
        <div className="container">
          <a href="#home-code">Code</a>
          <a href="#home-collaborate">Collaborate</a>
          <a href="#home-develop">Develop</a>
          <a href="#home-automate">Automate</a>
          <a href="#home-secure">Secure</a>
          <a href="#home-community">Community</a>
        </div>
      </div>

      <div className="seniorinfo-part1">
        <div className="seniorinfo-part1-wraper">
          <div className="title">
            Give your code a <br /> home in the cloud
          </div>
          <ul className="gitlog-ul">
            <li className="gitlog-li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="28"
                viewBox="0 0 28 20"
                width="28"
                className="gitlog-icon">
                <circle cx="14" cy="10" fill="#fff" r="5" stroke="#d0d6df" strokeWidth="2"></circle>
              </svg>
              <div className="gitlog-title">
                Record or rewind any change to your code to keep you and your team in sync.{' '}
                <span className="text-white">Host it all for free with unlimited public and private repositories.</span>
              </div>
            </li>
            <li className="gitlog-li-c" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 32"
                className="gitlog-icon"
                height="32"
                width="28">
                <g fill="#fff">
                  <path d="m17.8 24.4h-11c-.6 0-1.1-.5-1.1-1.1v-1.3c0-.8.6-1.4 1.4-1.4h7.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-7.3c-.5 0-.9.1-1.4.3v-12.3c0-.6.5-1.1 1.1-1.1h13.6v6.9c0 .5.4.9.9.9s.9-.4.9-.9v-7.8c0-.5-.4-.9-.9-.9h-14.4c-1.6 0-2.9 1.3-2.9 2.9v16.5c0 1.6 1.3 2.9 2.9 2.9h11c.5 0 .9-.4.9-.9s-.5-.9-.9-.9z"></path>
                  <path d="m25.4 19.2-3.5-3.8c-.3-.4-.9-.4-1.3 0l-3.5 3.8c-.2.2-.2.4-.2.6s.1.4.3.6.4.3.6.2c.2 0 .4-.1.6-.3l2-2.1v9c0 .5.4.9.9.9s.9-.4.9-.9v-9l2 2.1c.2.2.4.3.6.3s.5-.1.6-.2c.2-.2.3-.4.3-.6-.1-.3-.2-.5-.3-.6z"></path>
                </g>
              </svg>
              <span className="gitlog-content">
                <strong className="text-bold text-white">jasonetco</strong> added some commits 8 minutes ago
              </span>
            </li>
            <li className="gitlog-li-c" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="22" width="28" className="gitlog-icon">
                <path d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z" fill="#465061"></path>
                <circle cx="14" cy="11" fill="#041027" r="5" stroke="#465061" strokeWidth="2"></circle>
              </svg>
              <span className="gitlog-content">Updated README.md</span>
            </li>
            <li className="gitlog-li-c" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="22" width="28" className="gitlog-icon">
                <path d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z" fill="#465061"></path>
                <circle cx="14" cy="11" fill="#041027" r="5" stroke="#465061" strokeWidth="2"></circle>
              </svg>
              <span className="gitlog-content">Support Octocats shared on Twitter</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SeniorInfo
