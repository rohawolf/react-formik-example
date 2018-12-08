// src/components/PhoneInfoForm.js

import React from 'react';
import { Formik } from 'formik';
import './PhoneInfoForm.css';

const PhoneInfoForm = ({ info, onSave }) => (
  <Formik
    initialValues={{
      username: info.username,
      phone: info.phone,
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        // onSave()
      }, 500);
    }}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          {/* 이름 입력 input */}
          <label 
            htmlFor="username"
            style= {{ display: "block" }}
          >
            이름
          </label>
          <input
            id="username"
            placeholder="이름을 입력하세요."
            type="text"
            value={values.username}
            onChange={handleChange} 
            className={
              errors.username && touched.username ? 'text-input error' : 'text-input'
            }
          />
          {
            errors.username && 
            touched.username && <div className="input-feedback">{errors.username}</div>
          }

          {/* 전화번호 입력 input */}
          <label 
            htmlFor="phone"
            style= {{ display: "block" }}
          >
            번호
          </label>
          <input
            id="phone"
            placeholder="전화번호를 입력하세요."
            type="text"
            value={values.phone}
            onChange={handleChange} 
            className={
              errors.phone && touched.phone ? 'text-input error' : 'text-input'
            }
          />
          {
            errors.phone && 
            touched.phone && <div className="input-feedback">{errors.phone}</div>
          }
          <div>
            <button 
              type="submit" 
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
      );

    }}
  </Formik>
)

export default PhoneInfoForm;