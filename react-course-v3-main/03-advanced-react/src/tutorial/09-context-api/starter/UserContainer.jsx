import { useAppContext } from "./navbar"


const UserContainer = () => {

const { user, logout, login } = useAppContext();

  if (user) {
    return (
      <div className="user-container">
        Hello There, {user?.name}{' '}
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    )
  } else {
    return (
      <div className="user-container">
        <button className="btn" onClick={login}>Login</button>
      </div>
    )
  }
}

export default UserContainer
