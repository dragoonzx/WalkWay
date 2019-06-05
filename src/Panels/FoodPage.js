import React from 'react'
import { Link } from 'react-router-dom'
import './FoodPage.css'

import sushi from '../Images/sushi-dish.svg'
import pizza from '../Images/pizza.svg'
import vegeterian from '../Images/salad.svg'
import burger from '../Images/burger.svg'

class FoodPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choose: [0, 0, 0, 0]
    }
    this.onChoose = this.onChoose.bind(this)
  }

  onChoose(arg) {
    let chs = this.state.choose
    if (chs[arg] === 0) {
      chs[arg] = 1
    } else {
      chs[arg] = 0
    }
    this.setState({ choose: chs })
  }

  componentWillMount() {}

  render() {
    console.log(this.props.match.params.params)
    return (
      <div className="start-page start-page_change-color">
        <div className="header-text text text_bold">
          Выберите ваши предпочтения
        </div>
        <div className="header-text text small-text">
          Мы постараемся учесть всё.
        </div>
        <div className="items">
          <div
            onClick={() => {
              this.onChoose(0)
            }}
            className={
              this.state.choose[0] === 1
                ? 'square-item item_color_white item_choose_true'
                : 'square-item item_color_white item_choose_false'
            }
          >
            <img
              className={
                this.state.choose[0] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={sushi}
            />
          </div>
          <div
            onClick={() => {
              this.onChoose(1)
            }}
            className={
              this.state.choose[1] === 1
                ? 'square-item item_color_light-orange item_choose_true'
                : 'square-item item_color_light-orange item_choose_false'
            }
          >
            <img
              className={
                this.state.choose[1] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={pizza}
            />
          </div>
          <div
            onClick={() => {
              this.onChoose(2)
            }}
            className={
              this.state.choose[2] === 1
                ? 'square-item item_color_light-green item_choose_true'
                : 'square-item item_color_light-green item_choose_false'
            }
          >
            <img
              className={
                this.state.choose[2] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={vegeterian}
            />
          </div>
          <div
            onClick={() => {
              this.onChoose(3)
            }}
            className={
              this.state.choose[3] === 1
                ? 'square-item item_color_light-red item_choose_true'
                : 'square-item item_color_light-red item_choose_false'
            }
          >
            <img
              className={
                this.state.choose[3] === 1
                  ? 'item-icon item_choose_true'
                  : 'item-icon item_choose_false'
              }
              src={burger}
            />
          </div>
        </div>
        <div
          className={
            this.state.choose.indexOf(1) !== -1
              ? 'button accept-button accept-button-up'
              : 'button accept-button accept-button-down'
          }
        >
          <Link
            className="link"
            to={{
              pathname:
                '/duration/' +
                this.props.match.params.params +
                '&' +
                this.state.choose.join('')
            }}
          >
            Выбрать
          </Link>
        </div>
      </div>
    )
  }
}

export default FoodPage
