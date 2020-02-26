import React from 'react'
import Confirmation from './Confirmation.js'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstValue: '',
      lastValue: '',
      address1Value: '',
      address2Value: '',
      cityValue: '',
      stateValue: '',
      zipValue: '',
      countryValue: '',
      firstFeedback: '',
      lastFeedback: '',
      address1Feedback: '',
      cityFeedback: '',
      stateFeedback: '',
      zipFeedback: '',
      countryFeedback: '',
      firstIsValid: false,
      lastIsValid: false,
      address1IsValid: false,
      cityIsValid: false,
      stateIsValid: false,
      zipIsValid: false,
      countryIsValid: false,
      confirming: false,
      submitting: false,
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstChange = this.handleFirstChange.bind(this)
    this.handleLastChange = this.handleLastChange.bind(this)
    this.handleAddress1Change = this.handleAddress1Change.bind(this)
    this.handleAddress2Change = this.handleAddress2Change.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleUndoConfirm = this.handleUndoConfirm.bind(this)
    this.handleRegisterCallback = this.handleRegisterCallback.bind(this)
  }
  handleSubmit(event) {
    let firstFeedback = requiredValidator('First', this.state.firstValue)
    if (firstFeedback === '') {
      this.setState({ firstFeedback: firstFeedback, firstIsValid: true })
    } else {
      this.setState({ firstFeedback: firstFeedback, firstIsValid: false })
    }

    let lastFeedback = requiredValidator(`Last`, this.state.lastValue)
    if (lastFeedback === '') {
      this.setState({ lastFeedback: lastFeedback, lastIsValid: true })
    } else {
      this.setState({ lastFeedback: lastFeedback, lastIsValid: false })
    }
    let address1Feedback = requiredValidator(
      `Address 1`,
      this.state.address1Value
    )
    if (address1Feedback === '') {
      this.setState({
        address1Feedback: address1Feedback,
        address1IsValid: true
      })
    } else {
      this.setState({
        address1Feedback: address1Feedback,
        address1IsValid: false
      })
    }
    let cityFeedback = requiredValidator('City', this.state.cityValue)
    if (cityFeedback === '') {
      this.setState({ cityFeedback: cityFeedback, cityIsValid: true })
    } else {
      this.setState({ cityFeedback: cityFeedback, cityIsValid: false })
    }
    let stateFeedback = requiredValidator('State', this.state.stateValue)
    if (stateFeedback === '') {
      this.setState({ stateFeedback: stateFeedback, stateIsValid: true })
    } else {
      this.setState({ stateFeedback: stateFeedback, stateIsValid: false })
    }
    let zipFeedback = zipValidator('Zip', this.state.zipValue)
    if (zipFeedback === '') {
      this.setState({ zipFeedback: zipFeedback, zipIsValid: true })
    } else {
      this.setState({ zipFeedback: zipFeedback, zipIsValid: false })
    }

    let countryFeedback = requiredValidator('Country', this.state.countryValue)
    if (countryFeedback === '') {
      this.setState({
        countryFeedback: countryFeedback,
        countryIsValid: true
      })
    } else {
      this.setState({
        countryFeedback: countryFeedback,
        countryIsValid: false
      })
    }

    setTimeout(() => {
      if (
        this.state.firstIsValid === true &&
        this.state.lastIsValid === true &&
        this.state.address1IsValid === true &&
        this.state.cityIsValid === true &&
        this.state.stateIsValid === true &&
        this.state.zipIsValid === true &&
        this.state.countryIsValid === true
      ) {
        this.setState({ confirming: true })
      }
    }, 1000)

    event.preventDefault()
  }
  handleFirstChange(event) {
    this.setState({ firstValue: event.target.value })
  }
  handleLastChange(event) {
    this.setState({ lastValue: event.target.value })
  }
  handleAddress1Change(event) {
    this.setState({ address1Value: event.target.value })
  }
  handleAddress2Change(event) {
    this.setState({ address2Value: event.target.value })
  }
  handleCityChange(event) {
    this.setState({ cityValue: event.target.value })
  }
  handleStateChange(event) {
    this.setState({ stateValue: event.target.value })
  }
  handleZipChange(event) {
    this.setState({ zipValue: event.target.value })
  }
  handleCountryChange(event) {
    this.setState({ countryValue: event.target.value })
  }
  handleUndoConfirm() {
    this.setState({ confirming: false })
  }
  handleRegisterCallback() {
    this.setState({ submitted: true })
  }

  render() {
    return (
      <div>
        {this.state.confirming && !this.state.submitted && (
          <Confirmation
            first={this.state.firstValue}
            last={this.state.lastValue}
            address1={this.state.address1Value}
            address2={this.state.address2Value}
            city={this.state.cityValue}
            state={this.state.stateValue}
            zip={this.state.zipValue}
            country={this.state.countryValue}
            undo={this.handleUndoConfirm}
            callback={this.handleRegisterCallback}
          />
        )}
        {this.state.submitted === true && (
          <div className="card">
            <h2>Thank you for registering!</h2>
          </div>
        )}
        {this.state.confirming === false && (
          <form onSubmit={this.handleSubmit} className={'card'}>
            <h1>User Registration</h1>
            <div>
              <label>
                <span>First:</span>
                <input
                  value={this.state.firstValue}
                  onChange={this.handleFirstChange}
                ></input>
              </label>
              {this.state.firstFeedback !== '' && (
                <span className="feedback">{this.state.firstFeedback}</span>
              )}
            </div>
            <div>
              <label>
                <span>Last:</span>
                <input
                  value={this.state.lastValue}
                  onChange={this.handleLastChange}
                ></input>
              </label>
              {this.state.nameFeedback !== '' && (
                <span className="feedback">{this.state.lastFeedback}</span>
              )}
            </div>
            <div>
              <label>
                <span>Address 1:</span>
                <input
                  value={this.state.address1Value}
                  onChange={this.handleAddress1Change}
                ></input>
              </label>
              {this.state.address1Feedback !== '' && (
                <span className="feedback">{this.state.address1Feedback}</span>
              )}
            </div>
            <div>
              <label>
                <span>Address 2:</span>
                <input
                  value={this.state.address2Value}
                  onChange={this.handleAddress2Change}
                ></input>
              </label>
            </div>
            <div>
              <label>
                <span>City:</span>
                <input
                  value={this.state.cityValue}
                  onChange={this.handleCityChange}
                ></input>
              </label>
              {this.state.cityFeedback !== '' && (
                <span className="feedback">{this.state.cityFeedback}</span>
              )}
            </div>
            <div>
              <label>
                <span>State:</span>
                <select
                  value={this.state.stateValue}
                  onChange={this.handleStateChange}
                >
                  <option></option>
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </select>
              </label>
              {this.state.stateFeedback !== '' && (
                <span className="feedback">{this.state.stateFeedback}</span>
              )}
            </div>
            <div>
              <label>
                <span>Zip:</span>
                <input
                  value={this.state.zipValue}
                  onChange={this.handleZipChange}
                ></input>
              </label>
              {this.state.zipFeedback !== '' && (
                <span className="feedback">{this.state.zipFeedback}</span>
              )}
            </div>
            <div>
              <label>
                <span>Country:</span>
                <select
                  value={this.state.countryValue}
                  onChange={this.handleCountryChange}
                >
                  <option></option>
                  <option>US</option>
                </select>
              </label>
              {this.state.countryFeedback !== '' && (
                <span className="feedback">{this.state.countryFeedback}</span>
              )}
            </div>
            <input className="form-button" type="submit" value="Review" />
          </form>
        )}
      </div>
    )
  }
}

function requiredValidator(field, input) {
  if (input === '') {
    return `${field} is required`
  }
  return ''
}

function zipValidator(field, input) {
  let isValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input)
  if (isValid) {
    return ''
  }
  return `${field} invalid`
}

export default Form
