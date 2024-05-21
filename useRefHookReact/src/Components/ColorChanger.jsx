import React, { useRef } from 'react';

const ColorChanger = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
  };

  return (
    <div>
      <h2>Click to Change Color</h2>
      <div
        ref={divRef}
        onClick={handleClick}
        style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', cursor: 'pointer' }}
      >
        Click me to change my color!
      </div>
    </div>
  );
};

export default ColorChanger;
