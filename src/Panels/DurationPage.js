import React from 'react'
import { Link } from 'react-router-dom'
import './DurationPage.css'

class DurationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  change(e) {
    console.log(e)

    this.setState({ value: e })
  }

  render() {
    return (
      <div className="start-page start-page_change-color">
        <div className="header-text text text_bold">Ваш бюджет</div>
        <div className="header-text text small-text">
          Сколько планируете потратить?
        </div>
        <input
          className="slider"
          type="range"
          min="0"
          max="1500"
          step="100"
          defaultValue="1500"
          onChange={e => {
            this.setState({ value: 1500 - e.target.value })
          }}
        />
        <div className="slider-value">
          {this.state.value}
          <br />
          <span>рублей</span>
        </div>
        <div className="button accept-button">
          <Link
            className="link"
            to={{
              pathname:
                '/map/' +
                this.props.match.params.params +
                '&' +
                this.state.value
            }}
          >
            Выбрать
          </Link>
        </div>
      </div>
    )
  }
}

export default DurationPage
