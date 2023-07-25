import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books'
  })
  
  const handleClick = () => {
    setPerson({
      name: 'john',
      age: 19,
      hobby: 'screan at the computer'
    })
  };

  return (
    <div>
      <h1>UseState Object Example</h1>
      <h2>{person.name}</h2>
      <p>{person.age}</p>
      <p>{person.hobby}</p>
      <button onClick={handleClick} type="button" className='btn'>Show dev</button>
    </div>
  )
};

export default UseStateObject;
