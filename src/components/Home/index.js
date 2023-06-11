import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLogin = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  onLogout = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <Message isLoggedIn={isLoggedIn} />
          <div>
            {!isLoggedIn ? (
              <Login loggedIn={this.onLogin} />
            ) : (
              <Logout loggedOut={this.onLogout} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
