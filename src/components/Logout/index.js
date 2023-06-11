import './index.css'

const Logout = props => {
  const {loggedOut} = props

  return (
    <button type="button" onClick={loggedOut}>
      Logout
    </button>
  )
}

export default Logout
