import React from 'react';

function ResetButton({ onReset }) {
  return (
    <button id="reset-button" className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
}

export default ResetButton;
