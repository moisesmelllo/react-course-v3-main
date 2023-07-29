import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let isAnyFieldEmpty = false;

    for (const [name, value] of formData.entries()) {
      if (value.trim() === '') {
        isAnyFieldEmpty = true;
        break
      }
    }

    if (isAnyFieldEmpty) {
      alert('Por favor, preencha todos os campos antes de enviar o formulario!')
      return;
    }


    const newUser = Object.fromEntries(formData)
    console.log(newUser)
    setValue(value + 1)
    e.currentTarget.reset()
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
