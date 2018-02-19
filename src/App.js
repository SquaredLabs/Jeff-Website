import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import store from './configureStore'
import history from './history'
import Lab from './components/Lab'
import Publications from './components/Publications'
import Reading from './components/Reading'
import Collaborate from './components/Collaborate'
import Work from './components/Work'
import Content from './components/Content'
import NotFound from './components/NotFound'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import './App.css'

// Component that will hold body of landing page
const Layout = ({ children }) =>
  <div>
    <main className="main-container">
      { children }
      <Navigation />
    </main>
    <Footer />
  </div>

const App = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Lab} />
          <Route path='/publications' component={Publications} />
          <Route path='/reading' component={Reading} />
          <Route path='/collaborate' component={Collaborate} />
          <Route path='/work' component={Work} />
          <Route path='/content' component={Content} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>

export default App
