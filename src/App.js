import React from 'react'
import HomePage from './HomePage'
import EditorPage from './Editor'
import { Router, Route, HashRouter } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
import TopBar from './components/TopBar'
import { DocumentStore } from './store'
import './App.css'

const history = createHistory()
const documentStore = new DocumentStore()
const root = '/cam'

const App = () => {
  return (
    <>
      <div className='App'>
        <HashRouter basename='/'>
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
              path={root + '/editor'}
              component={props => (
                <EditorPage {...props} documentStore={documentStore} />
              )}
            />
          </Router>
        </HashRouter>
      </div>
    </>
  )
}
export default App
