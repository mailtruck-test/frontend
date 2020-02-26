import React from 'react'

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.postRegistration = this.postRegistration.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  postRegistration(callback) {
    let registrationData = {
      first: this.props.first,
      last: this.props.last,
      address: this.props.address1,
      address2: this.props.address2,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      country: this.props.country
    }
    let marshaled = JSON.stringify(registrationData)
    console.log('with headers')
    fetch('http://wotan.xyz:3000/register/', {
      method: 'post',
      body: marshaled,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        callback()
        console.log(data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render(props) {
    return (
      <div className="card">
        <div className="row">
          <span>First: </span>
          <span>{this.props.first}</span>
        </div>
        <div className="row">
          <span>Last: </span>
          <span>{this.props.last}</span>
        </div>
        <div className="row">
          <span>Address 1: </span>
          <span>{this.props.address1}</span>
        </div>
        <div className="row">
          <span>Address 2: </span>
          <span>{this.props.address2}</span>
        </div>
        <div className="row">
          <span>City: </span>
          <span>{this.props.city}</span>
        </div>
        <div className="row">
          <span>State: </span>
          <span>{this.props.state}</span>
        </div>
        <div className="row">
          <span>Zip: </span>
          <span>{this.props.zip}</span>
        </div>
        <div className="row">
          <span>Country: </span>
          <span>{this.props.country}</span>
        </div>
        <button
          className="form-button"
          onClick={() => {
            this.props.undo()
          }}
        >
          Edit
        </button>
        <button
          className="form-button"
          onClick={() => this.postRegistration(this.props.callback)}
        >
          Register
        </button>
      </div>
    )
  }
}

export default Confirmation
