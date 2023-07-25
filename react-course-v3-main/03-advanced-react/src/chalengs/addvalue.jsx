const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count++;
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick}>add</button>
    </div>
  );
};

export default ErrorExample;