// src/components/PhoneInfo.js
import React from 'react';

const PhoneInfo = ({ username, phone }) => {
  
  return (
    <div style={{ textAlign: 'center' }}>
      <span><b>{ username }</b> :: { phone }</span>
    </div>
  );
};

export default PhoneInfo;