import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newUser = {name: name }
      setPeople([...people, newUser])
      setName('') // Reset the input field after submitting
      console.log(name)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div>
        {people.map((value) => (
          <h1 key={value.id}>{value.name}</h1>
        ))}
      </div>
    </div>
  )
}

export default UserChallenge
