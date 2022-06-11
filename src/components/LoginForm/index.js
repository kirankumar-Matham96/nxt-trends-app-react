import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onLoginSuccess = () => {
    const {history} = this.props
    this.setState({username: '', password: ''})
    history.replace('/')
  }

  onLoginFailure = response => {
    this.setState({errorMessage: `*${response.error_msg}`})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    if (response.ok) {
      this.onLoginSuccess()
    } else {
      const jsonResponse = await response.json()
      this.onLoginFailure(jsonResponse)
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-page-outer-container">
        <div className="login-page-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-logo-sm"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <div className="login-main-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-logo-lg"
            />
            <form className="login-form-container" onSubmit={this.onFormSubmit}>
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Username"
                onChange={this.onUsernameChange}
                className="input-field"
              />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.onPasswordChange}
                className="input-field"
              />
              <button type="submit" className="login-button">
                Login
              </button>
              <p className="error-message">{errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
