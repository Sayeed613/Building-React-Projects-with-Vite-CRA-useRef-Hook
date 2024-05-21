import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Focusable Input Field</h2>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
    </div>
  );
};

export default FocusableInput;
