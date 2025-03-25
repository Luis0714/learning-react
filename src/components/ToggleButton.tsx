import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isActivated, setIsActivated] = useState(false);
  return (
    <button
      onClick={() => setIsActivated(!isActivated)}
      className={isActivated ? 'active' : 'deactive'}
    >
      {isActivated ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleButton;
