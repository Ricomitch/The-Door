import React from 'react'
import './App.css'
import Confirmation from './components/Form/Confirmation.jsx'
import GetInvolved from './screens/GetInvolved/GetInvolved.jsx'
import Homepage from './screens/Homepage/Homepage.jsx'
import FormScreen from './screens/FormScreen/FormScreen.jsx'
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
          <FormScreen />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
