import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      name: 'Dev',
      age: 18,
    })
  }

  const logout = () => {
    setUser(null)
  }

  return user ? (
    <>
      <h4>hello there, {user.name}</h4>
      <button className="btn" onClick={logout}>
        logout
      </button>
    </>
  ) : (
    <section>
      <h2>please login</h2>
      <button className="btn" onClick={login}>
        login
      </button>
    </section>
  )
}

export default UserChallenge
