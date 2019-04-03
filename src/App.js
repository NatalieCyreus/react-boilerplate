import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Hello World!</h1>
      </Fragment>
    )
  }
}

export default hot(module)(App)
