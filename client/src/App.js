import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Art from './components/Art'
import Home from './components/Home'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/art" component={Art} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
