import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from '../../views/exemples/About'
import Home from '../../views/exemples/Home'
import Param from '../../views/exemples/Param'

const Content = props => (
  <main className="Content">
    <Switch>
      <Route path="/param/:id"><Param /></Route>
      <Route path="/about"><About /></Route>
      <Route exact path="/"><Home /></Route>
    </Switch>
  </main>
)

export default Content