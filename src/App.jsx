import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import Success from './components/Success'
import './App.css'

function App() {
  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh' }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderForm} />
        <Route path="/success" component={Success} />
      </Switch>
    </div>
  )
}

export default App
