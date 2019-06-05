import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import './App.css'
import StartPage from './Panels/StartPage'
import FoodPage from './Panels/FoodPage'
import DurationPage from './Panels/DurationPage'
import MapPage from './Panels/MapPage'
import TinderCard from './Panels/Tinder'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/meals/:params" component={FoodPage} />
        <Route path="/duration/:params" component={DurationPage} />
        <Route path="/map/:params" component={MapPage} />
        <Route path="/tinder" component={TinderCard} />
      </Switch>
    </HashRouter>
  )
}

export default App
