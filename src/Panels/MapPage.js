import React from 'react'
import './MapPage.css'
import TinderCard from './Tinder'
import { routes, points } from './data.js'
import { serverResponse, getInfoPlace, getRoutes } from '../API'

export default class MapPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      points: [],
      mymap: ''
    }
    this.onRemoveRoute = this.onRemoveRoute.bind(this)
  }

  onRemoveRoute(routes) {
    let tPoints = []
    this.state.mymap.remove()
    this.setState({
      mymap: window.L.map('mapid').setView([59.559386, 30.114359], 14.48)
    })

    console.log('onRemoveRoute')

    this.setState({ routes: routes, points: [] })

    if (this.state.routes[0] !== undefined) {
      for (let i = 0; i < this.state.routes[0].length; i++) {
        //[1,3,4,5]
        tPoints.push(points[this.state.routes[0][i] - 1].coordinates)
      }
    }
    console.log(tPoints)

    this.setState({ points: tPoints })
  }

  componentDidMount() {
    serverResponse(getRoutes(this.props.match.params.params)).then(e =>
      console.log(e)
    )
    let tRoutes = this.state.routes
    let tPoints = []
    let params = this.props.match.params.params.split('&')
    if (params[0].split('')[1] == '1') {
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].theme === 1) {
          tRoutes.push(routes[i].points)
        }
      }
    } else {
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].theme === 0) {
          tRoutes.push(routes[i].points)
        }
      }
    }
    this.setState({ routes: tRoutes })
    console.log(this.state.routes)
    for (let i = 0; i < this.state.routes[0].length; i++) {
      //[1,3,4,5]
      tPoints.push(points[this.state.routes[0][i] - 1].coordinates)
    }
    console.log(tPoints)

    this.setState({ points: tPoints })
    console.log(this.state.points)
  }
  render() {
    console.log(this.state)
    setTimeout(
      function() {
        let waypoints = []
        for (let i = 0; i < this.state.points.length; i++) {
          waypoints.push(
            window.L.latLng(this.state.points[i][0], this.state.points[i][1])
          )
        }
        if (this.state.mymap === '') {
          this.setState({
            mymap: window.L.map('mapid').setView([59.559386, 30.114359], 14.48)
          })
        }
        var myIcon = window.L.icon({
          iconUrl:
            'https://vk.com/doc314864347_503745968?hash=fcc885f6a984ec8ead&dl=7ef810dc6fbf5874de',
          iconSize: [28, 28]
        })
        window.L.Marker.prototype.options.icon = myIcon
        window.L.tileLayer
          .provider('HERE.reducedDay', {
            app_id: 'zAb9wgNk7o2spmyo5tHD',
            app_code: 'jdH7-AVXp8NwySqSpB-5Wg'
          })
          .addTo(this.state.mymap)

        var routeControl = window.L.Routing.control({
          lineOptions: {
            styles: [
              {
                color: '#C44892',
                opacity: 1,
                weight: 6
              },
              {
                color: '#FF8F8F',
                opacity: 1,
                weight: 6
              }
            ]
          },
          fitSelectedRoutes: false,
          router: window.L.Routing.graphHopper(
            '1ffd06a7-66cf-4e7d-ac84-1fb8b5049b27',
            {
              urlParameters: {
                vehicle: 'foot'
              }
            }
          ),
          showAlternatives: true,
          waypoints: waypoints
        }).addTo(this.state.mymap)
        routeControl.on('routesfound', function(e) {
          var routes = e.routes
          var summary = routes[0].summary
          window.times = Math.round(summary.totalTime % 3600) / 60
          window.distance = summary.totalDistance / 1000
        })
      }.bind(this),
      500
    )

    return (
      <div>
        <div id="mapid" style={{ height: '1080px', zIndex: 0 }} />
        <TinderCard
          onRemoveRoute={this.onRemoveRoute}
          routes={this.state.routes}
        />
      </div>
    )
  }
}
