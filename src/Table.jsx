import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import * as serviceWorker from './serviceWorker';
import normalizePhone from './normalizePhone'
import NumberFormat from 'react-number-format';

  const Table = ({ items }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          { items.map(item => {
             return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
              </tr>
            )
           })}
        </tbody>
      </table>
    );
  }

  export default Table