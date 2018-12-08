// src/containers/PhoneInfoListContainer.js
import React, { Component } from 'react';
import {
  PhoneInfoForm,
  PhoneInfoList,
} from '../components';

class PhoneInfoListContainer extends Component {

  render() {

    const dummyData = [
      {
        key: 1,
        username: 'firsttest',
        phone: '01012345678',
      },
      {
        key: 2,
        username: 'secondtest',
        phone: '01043218765',
      },
    ];

    const dummyInfo = {
      key: 1,
      username: 'firsttest',
      phone: '01012345678',
    };


    return (
      <div>
        <PhoneInfoForm 
          info={dummyInfo}
        />
        <PhoneInfoList 
          data={dummyData}
        />
      </div>
    );
  }
}

export default PhoneInfoListContainer;