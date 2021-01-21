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

      <div className="seniorinfo-part2">
        <div className="seniorinfo-part2-wraper">
          <div className="seniorinfo-part2-light ">
            <div className="gitlog-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="26"
                width="28"
                className="flex-shrink-0 mr-3-fluid">
                <path d="m0 0h28v26h-28z" fill="#fff"></path>
                <g fill="#8392ad">
                  <path d="m11.25 13a.75.75 0 0 1 -.22.53l-2.75 2.75a.75.75 0 0 1 -1.06-1.06l2.22-2.22-2.22-2.22a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></path>
                  <path
                    clipRule="evenodd"
                    d="m2 5.75c0-.966.784-1.75 1.75-1.75h20.5c.966 0 1.75.784 1.75 1.75v14.5a1.75 1.75 0 0 1 -1.75 1.75h-20.5a1.75 1.75 0 0 1 -1.75-1.75zm1.75-.25a.25.25 0 0 0 -.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25v-14.5a.25.25 0 0 0 -.25-.25z"
                    fillRule="evenodd"></path>
                </g>
              </svg>
              git checkout -b origin add-status-screens
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 110 142"
              className="home-branch">
              <path d="m1-8c0 75 108 75 108 150" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            <div className="gitlog-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="20"
                viewBox="0 0 28 20"
                width="28"
                className="">
                <circle cx="14" cy="10" fill="#fff" r="5" stroke="#d0d6df" strokeWidth="2"></circle>
              </svg>
              origin/add-status-screens
            </div>
            <ul className="gitlog-ul">
              <li className="gitlog-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="28"
                  viewBox="0 0 28 20"
                  width="28"
                  className="">
                  <circle cx="14" cy="10" fill="#fff" r="5" stroke="#d0d6df" strokeWidth="2"></circle>
                </svg>

                <div className="js-build-in-item build-in-slideX-left h5-mktg-fluid h4-sm-mktg-fluid text-gray-mktg lh-condensed text-semibold-mktg mb-5-fluid mb-lg-0 col-5-max">
                  <span className="text-gray-dark-mktg">Code review is built in.</span> Pull requests cover the entire
                  review flow: propose changes, browse code, make a suggestion, and sign off in one place.
                </div>
              </li>
              <li className="gitlog-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="26"
                  width="28"
                  className="home-git-item flex-shrink-0 mr-3-fluid position-relative z-1">
                  <path d="m0 0h28v26h-28z" fill="#fff"></path>
                  <g fill="#8392ad">
                    <path d="m11.25 13a.75.75 0 0 1 -.22.53l-2.75 2.75a.75.75 0 0 1 -1.06-1.06l2.22-2.22-2.22-2.22a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></path>
                    <path
                      clipRule="evenodd"
                      d="m2 5.75c0-.966.784-1.75 1.75-1.75h20.5c.966 0 1.75.784 1.75 1.75v14.5a1.75 1.75 0 0 1 -1.75 1.75h-20.5a1.75 1.75 0 0 1 -1.75-1.75zm1.75-.25a.25.25 0 0 0 -.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25v-14.5a.25.25 0 0 0 -.25-.25z"
                      fillRule="evenodd"></path>
                  </g>
                </svg>

                <span className="text-truncate unselectable">git merge add-status-screens</span>
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 110 142"
              className="d-none d-md-block position-relative home-branch offset-n1"
              style={{ transform: 'scaleX(-1)' }}>
              <path d="m1-8c0 75 108 75 108 150" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            <div className="gitlog-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="28"
                viewBox="0 0 28 20"
                width="28"
                className="">
                <circle cx="14" cy="10" fill="#fff" r="5" stroke="#d0d6df" strokeWidth="2"></circle>
              </svg>
              git checkout -b origin add-status-screens
            </div>
          </div>
          <div className="seniorinfo-part2-other">
            <div className="turn1"></div>
            <div className="turn2"></div>
          </div>
        </div>
      </div>
      <div className="seniorinfo-part3"></div>
    </div>
  )
}

export default SeniorInfo
