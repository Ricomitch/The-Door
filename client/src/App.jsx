import React from 'react'
import './App.css'
import Confirmation from './screens/Confirmation/Confirmation.jsx'
import GetInvolved from './screens/GetInvolved/GetInvolved.jsx'
import Homepage from './screens/Homepage/Homepage.jsx'
import Form from './screens/Form/Form.jsx'
import Footer from './components/shared/Footer/Footer.jsx'
import Nav from './components/shared/Nav/Nav.jsx'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/get-involved'>
          <GetInvolved />
        </Route>
        <Route exact path='/sign-up'>
          <Form mode='sign-up' />
        </Route>
        <Route path='/sign-up/:id'>
          <Form mode='edit' />
        </Route>
        <Route path='/confirmation'>
          <Confirmation />
        </Route>
      </Switch>
      <Footer />
    </div>
    
  )
}

export default App
