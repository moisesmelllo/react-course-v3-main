// dataComponent.jsx
import React from 'react'
import { people } from '../../../data'

const dataComponent = () => {
  return (
    <div>
      {people.forEach((person) => {
        // Destructure the properties from the person object
        const { name, nickName, sister } = person

        // Return the JSX element within the forEach callback
        return (
          <p key={person.id}>
            Name: {name}, Nickname: {nickName}, Sister: {sister}
          </p>
        )
      })}
    </div>
  )
}

export default dataComponent
