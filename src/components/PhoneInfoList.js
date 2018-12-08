// src/components/PhoneInfoList.js
import React from 'react';
import {
  PhoneInfo,
} from '../components';

const PhoneInfoList = ({ data }) => {
  const list = data.map( info => (
    <PhoneInfo 
      key={info.index}
      username={info.username}
      phone={info.phone}
    />
  ));
  return (
    <div>
      { list }
    </div>
  );
};

export default PhoneInfoList;