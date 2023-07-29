import React, { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer'


const defaultState = {
  people: data,
}



const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: {id}})
    //let newPeople = people.filter((person) => person.id !== id);
    //setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({type: CLEAR_LIST})
    //setPeople([])
  }

  const reset = () => {
    dispatch({type: RESET_LIST})
    //setPeople(data)
  };

  return (
    <div>
    {state.people.length > 0 ? (
      <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        clear items
      </button>
      </div>
    ) : (
      <div>
        <button className='btn' onClick={reset}>
          reset
        </button>
      </div>
  )}
   </div>
  )
};

export default ReducerBasics;
