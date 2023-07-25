import React, {useState} from 'react';
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const removeAll = () => {
    setPeople([])
  }

  return (
    <section>
      <h2>UseState Array Example</h2>
      {people.map((person) => {
        return (
          <Person {...person} key={person.id} removePerson={removePerson} />
        )
      })}
      <button onClick={removeAll} className='btn' style={{marginTop: '35px'}}>Clear Items</button>
    </section>
  )
};

const Person = ({name, id, removePerson}) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <button onClick={() => removePerson(id)}>Remove</button>
      </div>

    </>
  )
}

export default UseStateArray
