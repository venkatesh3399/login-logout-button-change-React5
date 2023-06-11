import './index.css'

const Login = props => {
  const {loggedIn} = props
  return (
    <button type="button" onClick={loggedIn}>
      Login
    </button>
  )
}

export default Login
