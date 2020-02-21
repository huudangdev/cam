import React from 'react'
import HomePage from './HomePage'
import EditorPage from './Editor'
import { Router, Route, HashRouter } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
import TopBar from './components/TopBar'
import { DocumentStore } from './store'
import './App.css'

const history = createHistory({
  basename: '', // The base URL of the app (see below)
  forceRefresh: false, // Set true to force full page refreshes
  keyLength: 6, // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
})
const documentStore = new DocumentStore()
const root = '/cam'

const App = () => {
  return (
    <>
      <div className='App'>
        <Router history={history}>
          <TopBar />
          <Route
            path={root + '/'}
            exact
            component={props => (
              <HomePage {...props} />
            )}
          />
          <Route
            path={root + '/editor'} exact
            component={props => (
              <EditorPage {...props} documentStore={documentStore} />
            )}
          />
        </Router>
      </div>
    </>
  )
}
export default App
