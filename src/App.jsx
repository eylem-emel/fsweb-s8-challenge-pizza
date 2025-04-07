import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import './App.css'

function App() {
  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh' }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderForm} />
      </Switch>
    </div>
  )
}

export default App
