import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <div className="progress-text">{current} / {total}</div>
    </div>
  );
};

export default ProgressBar;