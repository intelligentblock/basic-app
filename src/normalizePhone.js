import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';


const normalizePhone = (props, previousValue) => {
  
    alert('test')
    if (!props) {
         alert('Password is required!')
      } else if (props.length < 6) {
         alert('Password has to be longer than 6 characters')
      }
  }
  
  export default normalizePhone