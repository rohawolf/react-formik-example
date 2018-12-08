// src/containers/PhoneInfoListContainer.js
import React, { Component } from 'react';
import {
  PhoneInfoForm,
  PhoneInfoList,
} from '../components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as phoneInfoActions from '../modules/phoneInfo';

class PhoneInfoListContainer extends Component {

  onSave = (values) => {
    const { PhoneInfoActions } = this.props;
    PhoneInfoActions.add(values);
  }

  render() {
    const { phoneInfoList} = this.props;
    console.log(phoneInfoList);
    return (
      <div>
        <PhoneInfoForm 
          onSave={this.onSave}
        />
        <PhoneInfoList 
          data={phoneInfoList}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    phoneInfoList: state.phoneInfo.phoneInfoList
  }),

  (dispatch) => ({
    PhoneInfoActions: bindActionCreators(phoneInfoActions, dispatch),
  }),

)(PhoneInfoListContainer);