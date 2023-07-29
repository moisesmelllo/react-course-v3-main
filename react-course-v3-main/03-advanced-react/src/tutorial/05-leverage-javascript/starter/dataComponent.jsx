// dataComponent.jsx
import avatar  from '../../../assets/default-avatar.svg'

import React from 'react'
import { people } from '../../../data'

const dataComponent = () => {
  return (
    <div>
      {people.map((person) => {
        // Destructure the properties from the person object
        const { name, nickName='shakeAndBake', sister, images } = person
        const img = images?.[0]?.small?.url || avatar;

        // Return the JSX element within the forEach callback
        return (
          <div>
          <p key={person.id}>
            <img src={img} alt={name} style={{width: '50px'}} />
            Name: {name}, Nickname: {nickName}, Sister: {sister}
          </p>
          </div>
        )
      })}
    </div>
  )
}

export default dataComponent
