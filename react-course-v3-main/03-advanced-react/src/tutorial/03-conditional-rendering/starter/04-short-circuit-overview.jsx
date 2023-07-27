import { useState } from 'react';

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  return <h2>short circuit overview</h2>;
};
export default ShortCircuitOverview;
