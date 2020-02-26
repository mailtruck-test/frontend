import React from 'react'
import Form from './Form.js'

import '../App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { page: 0 }
  }
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    )
  }
}

export default App
