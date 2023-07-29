import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [nextid, setNextid] = useState(data.length + 1);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newUser = {
        name: name,
        id: nextid }
      setPeople([...people, newUser])
      setName('') // Reset the input field after submitting
      setNextid((prevId) => prevId + 1)
      console.log(name)
    }
  }

  const handleDelete = (id) => {
    const updateUsers = people.filter((person) => person.id !== id);

    setPeople(updateUsers)
    
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
      <h1>users</h1>
        {people.map((person) => {
          return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <button onClick={() => handleDelete(person.id)} className='btn'>Remove</button>
          </div>
          )
          })}

    </div>
  )
}

export default UserChallenge
