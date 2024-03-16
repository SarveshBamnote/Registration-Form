import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstNameInput, lastNameInput} = this.state

    if (firstNameInput !== '') {
      this.setState({firstNameError: false})
    } else {
      this.setState({firstNameError: true})
    }

    if (lastNameInput !== '') {
      this.setState({lastNameError: false})
    } else {
      this.setState({lastNameError: true})
    }

    if (firstNameInput !== '' && lastNameInput !== '') {
      this.setState({isFormSubmitted: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  submitAgainBtn = () => {
    this.setState({
      firstNameInput: '',
      lastNameInput: '',
      firstNameError: false,
      lastNameError: false,
      isFormSubmitted: false,
    })
  }

  blurFirstName = () => {
    const {firstNameInput} = this.state

    if (firstNameInput !== '') {
      this.setState({firstNameError: false})
    } else {
      this.setState({firstNameError: true})
    }
  }

  blurLastName = () => {
    const {lastNameInput} = this.state

    if (lastNameInput !== '') {
      this.setState({lastNameError: false})
    } else {
      this.setState({lastNameError: true})
    }
  }

  render() {
    const {firstNameError, lastNameError, isFormSubmitted} = this.state
    const firstClassName = firstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    const lastClassName = lastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {!isFormSubmitted && (
            <form className="form-container" onSubmit={this.submitForm}>
              <div className="input-container">
                <label className="input-label" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  onChange={this.onChangeFirstName}
                  onBlur={this.blurFirstName}
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className={firstClassName}
                />
              </div>
              {firstNameError ? <p className="error-message">Required</p> : ''}
              <div className="input-container">
                <label className="input-label" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  onChange={this.onChangeLastName}
                  onBlur={this.blurLastName}
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className={lastClassName}
                />
              </div>
              {lastNameError ? <p className="error-message">Required</p> : ''}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
          {isFormSubmitted && (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-image"
              />
              <p>Submitted Successfully</p>
              <button
                className="submit-button"
                onClick={this.submitAgainBtn}
                type="button"
              >
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
