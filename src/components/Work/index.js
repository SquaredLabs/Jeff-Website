import React, { Component } from 'react'
import { colors } from '../../config'

import Header from '../Header'
import AvailablePositions from './AvailablePositions'
import Menu from '../Navigation/Menu'

import './styles.css'

const black = { color: colors.siteBlack }
const gray = { color: colors.siteGray }
const green = { color: colors.siteGreen }

class Work extends Component {
  render = () =>
    <div className="work-container">
      <Header page="Work"/>
      <div className="work-image-banner">
        <div className="work-image-container">
          <img alt="liv1" src="assets/img/liv_1.jpg"></img>
        </div>
        <div className="work-image-container">
          <img alt="phone" src="assets/img/phone.jpg"></img>
        </div>
        <div className="work-image-container">
          <img alt="liv2" src="assets/img/liv_2.jpg"></img>
        </div>
      </div>
      <div className="work-banner-1" style={green}>Seemann Lab is always hiring.</div>
      <AvailablePositions />
      <div className="work-banner-2" style={gray}>Not the listings you were hoping to see?</div>
      <div className="work-banner-3" style={green}>Apply anyway.</div>
      <div className="work-description" style={black}>
        Our eyes, ears, and minds are always open, especially to those interested in
        working with us.
        <br />
        <br />
        Send us an email with a cover letter discussing what it is you’d like to do at the lab,
        and why you want to engage with us. Include your resume/CV as well (both in PDF format).
      </div>
      <Menu />
    </div>
}

export default Work
