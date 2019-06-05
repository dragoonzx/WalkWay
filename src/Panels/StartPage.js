import React from 'react'
import { Link } from 'react-router-dom'
import './StartPage.css'
import like from '../Images/like-icon.svg'
import eating from '../Images/restaurant.svg'
import bike from '../Images/bike.svg'
import car from '../Images/sports-car.svg'

import { getNextRoute } from '../API.js'

class StartPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choose: [0, 0, 0, 0],
      accept: false
    }
    this.onChoose = this.onChoose.bind(this)
  }

  onChoose(arg) {
    if (this.state.accept === false) {
      this.setState({ accept: true })
    }
    let chs = this.state.choose
    if (chs[arg] === 0) {
      chs[arg] = 1
    } else {
      chs[arg] = 0
    }
    this.setState({ choose: chs })
  }

  render() {
    return (
      <div className="start-page">
        <div className="header-text text text_bold">
          Какое настроение у вас сегодня?
        </div>
        <div className="header-text text small-text">
          Выберите, что вам нравится и мы подберем вам маршрут.
        </div>
        <div className="items">
          <div
            onClick={() => {
              this.onChoose(0)
            }}
            className={
              this.state.choose[0] === 1
                ? 'square-item item_color_red item_choose_true item_color_red_anim'
                : 'square-item item_color_red item_choose_false item_color_red_anim'
            }
          >
            <img
              className={
                this.state.choose[0] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={like}
            />
          </div>
          <div
            onClick={() => {
              this.onChoose(1)
            }}
            className={
              this.state.choose[1] === 1
                ? 'square-item item_color_orange item_choose_true item_color_orange_anim'
                : 'square-item item_color_orange item_choose_false item_color_orange_anim'
            }
          >
            <img
              className={
                this.state.choose[1] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={eating}
            />
          </div>
          <div
            onClick={() => {
              this.onChoose(2)
            }}
            className={
              this.state.choose[2] === 1
                ? 'square-item item_color_blue item_choose_true item_color_blue_anim'
                : 'square-item item_color_blue item_choose_false item_color_blue_anim'
            }
          >
            <img
              className={
                this.state.choose[2] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={bike}
            />
          </div>
          <div
            onClick={() => {
              this.onChoose(3)
            }}
            className={
              this.state.choose[3] === 1
                ? 'square-item item_color_green item_choose_true item_color_green_anim'
                : 'square-item item_color_green item_choose_false item_color_green_anim'
            }
          >
            <img
              className={
                this.state.choose[3] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={car}
            />
          </div>
        </div>
        {this.state.accept === true && (
          <div
            className={
              this.state.choose.indexOf(1) !== -1
                ? 'button accept-button accept-button-up'
                : 'button accept-button accept-button-down'
            }
          >
            <Link
              className="link"
              to={{ pathname: getNextRoute(this.state.choose) }}
            >
              Выбрать
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default StartPage
