import React, { useRef , useState} from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const handleInput = () => {
    setValue(inputRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Input Field</h2>
      <input ref={inputRef} type="text" onChange={handleInput} />
      <p>Current Value: {value}</p>
    </div>
  );
};

export default UncontrolledInput;
