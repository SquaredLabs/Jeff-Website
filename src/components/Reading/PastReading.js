import React, { Component } from 'react'
import { apiFetchGeneric } from '../../utils'
import { colors, apiUri } from '../../config'

import './styles.css'

const blackStyle = { color: colors.siteBlack }

class PastReading extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount () {
    this.pastReading()
  }

  async pastReading () {
    const response = await apiFetchGeneric(apiUri.pastReading.protocol,
      apiUri.pastReading.hostname, apiUri.pastReading.pathname, apiUri.pastReading.query)
    this.setState({ books: response.data })
  }

  render () {
    const books = this.state.books.map((book) => {
      const uri = apiUri.nowReading.protocol + '//' + apiUri.nowReading.hostname + book.image.data.url
      return <img className="past-reading-img" key={book.id}
        alt={book.title} src={uri}></img>
    })

    return <div>
      <div className="header" style={blackStyle}>Past Reading</div>
      <div>{books}</div>
    </div>
  }
}

export default PastReading
