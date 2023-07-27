import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [falsy, setText] = useState('');
  // truthy
  const [truthy, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{falsy || 'truthy'}</h2>
      <h2>{truthy || 'falsy'}</h2>
      <h1>{truthy && 'falsy'}</h1>
      <h2>{falsy && 'falsy'}</h2>
    </div>
  )
  
};

export default ShortCircuitExamples;
