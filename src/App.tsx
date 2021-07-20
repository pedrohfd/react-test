import { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Games from './pages/Games'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Footer from './components/Footer'
import Account from './pages/Account'
import NewGame from './pages/NewGame'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/reset-password'>
          <ResetPassword />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/games'>
          <Games />
        </Route>
        <Route path='/account'>
          <Account />
        </Route>
        <Route path='/new-game'>
          <NewGame />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default App
