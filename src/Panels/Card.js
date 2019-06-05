import React, { Component } from 'react'
import './Card.css'
import arrowup from '../Images/up-arrow.svg'

import museum from '../Images/bank.svg'
import monument from '../Images/greek-column.svg'
import { getTypeOfPlace } from '../API'
import { points } from './data'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'down',
      places: [],
      moveButton: 'move-button-new',
      moveTinder: 'tinder-card-new',
      xcoords: '',
      left: 50,
      remove: false
    }
    this.onChangeStatus = this.onChangeStatus.bind(this)
    this.onTinderMove = this.onTinderMove.bind(this)
    this.onTinderMoveEnd = this.onTinderMoveEnd.bind(this)
  }

  onChangeStatus() {
    if (this.state.status === 'down') {
      this.setState({
        status: 'up',
        moveButton: 'move-button-down',
        moveTinder: 'tinder-card-up'
      })
    } else {
      this.setState({
        status: 'down',
        moveButton: 'move-button-up',
        moveTinder: 'tinder-card-down'
      })
    }
  }

  onTinderMove(x, y) {
    let a = this.state.left
    // a = a - 1;
    // this.setState({left: a})
    console.log(this.state.left)

    if (this.state.remove === true) {
      console.log('remove return')
      return
    }

    if (x < 60) {
      let interval = setInterval(
        function() {
          let a = this.state.left
          a = a - 1
          this.setState({ left: a, xcoords: x })
          console.log(this.state)

          setTimeout(clearInterval(interval), 1000)
        }.bind(this),
        20
      )
      this.props.onRemoveCard()
    } else if (x > window.innerWidth - 60) {
      let interval = setInterval(
        function() {
          let a = this.state.left
          a = a + 1
          this.setState({ left: a, xcoords: x })
          console.log(this.state.xcoords)
          if (this.state.xcoords > 120) {
            clearInterval(interval)
          }
        }.bind(this),
        20
      )
      this.props.onRemoveCard()
    }

    if (this.state.xcoords === '') {
      this.setState({ xcoords: x })
    } else if (this.state.xcoords > x) {
      a = a - (Math.abs(this.state.xcoords - x) / window.innerWidth) * 100
      this.setState({ left: a, xcoords: x })
    } else if (this.state.xcoords < x) {
      //0 - 60 ->
      a = a + (Math.abs(this.state.xcoords - x) / window.innerWidth) * 100
      this.setState({ left: a, xcoords: x })
    }
  }

  onTinderMoveEnd(x, y) {
    if (this.state.status === 'down') {
      return
    }
    if (x > 60 && x < window.innerWidth - 60) {
      if (x < window.innerWidth / 2) {
        let interval = setInterval(
          function() {
            if (this.state.left - 50 <= -1) {
              let a = this.state.left
              a = a + 1
              this.setState({ left: a, xcoords: x })
            } else {
              let a = this.state.left
              a = a + Math.abs(this.state.left - 50)
              this.setState({ left: a, xcoords: x })
            }
            if (Math.abs(this.state.left - 50) <= 0.005) {
              clearInterval(interval)
            }
          }.bind(this),
          20
        )
      } else {
        let interval = setInterval(
          function() {
            if (this.state.left - 50 >= 1) {
              let a = this.state.left
              a = a - 1
              this.setState({ left: a, xcoords: x })
            } else {
              let a = this.state.left
              a = a - Math.abs(this.state.left - 50)
              this.setState({ left: a, xcoords: x })
            }
            if (Math.abs(this.state.left - 50) <= 0.005) {
              clearInterval(interval)
            }
          }.bind(this),
          20
        )
      }
    }
  }

  componentWillMount() {
    for (let i = 0; i < this.props.id.length; i++) {
      console.log(points[this.props.id[i] - 1])

      this.state.places.push(points[this.props.id[i] - 1])
    }
    console.log(this.state.places)
  }

  render() {
    console.log(this.props)
    console.log(window.times)
    console.log(window.distance)
    return (
      <div>
        <div
          style={{ left: this.state.left + '%' }}
          onTouchEnd={e => this.onTinderMoveEnd(e.changedTouches[0].clientX)}
          onTouchMove={e => this.onTinderMove(e.targetTouches[0].clientX)}
          onClick={() => {
            this.onChangeStatus()
          }}
          className={'tinder-card ' + this.state.moveTinder}
        >
          <div className="tinder-card-header">Информация</div>
          <img
            className={'move-button ' + this.state.moveButton}
            src={arrowup}
          />
          <div className="line" />
          <div className="scrolling">
            {this.state.places.map((item, i) => (
              <>
                <div key={i} className="place-info">
                  <img
                    className={'typeof-place ' + item.type}
                    src={getTypeOfPlace(item.type)}
                  />
                  <div className="nameof-place">{item.title}</div>
                  <div />
                  <div
                    className={
                      item.id !== 11 ? 'desc-place' : 'desc-place big-desc'
                    }
                  >
                    {item.description}
                  </div>
                </div>
                <div className="separator" />
              </>
            ))}
          </div>
          <div className="buy-button" onClick={() => {}}>
            Купить билеты
          </div>
        </div>
      </div>
    )
  }
}

export default Card
