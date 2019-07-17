
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import * as serviceWorker from './serviceWorker';
import normalizePhone from './normalizePhone'
import NumberFormat from 'react-number-format';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
            console.log('items')
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            
            <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.id} {item.name}{item.email} {item.username}
              </li>
            ))}
          </ul>
   
        );

        
      }
    }
    
  }



  export default MyComponent