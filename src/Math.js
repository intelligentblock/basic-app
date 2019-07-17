import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import Select from 'react-select';

import CatDog from './CatDog'

class Math extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            list: ['a', 'b', 'c'],
        };
    }

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    onAddItem = () => {
        // not allowed AND not working
        this.setState(state => {
            const list = [...state.list, state.value];
console.log(list)
            return {
                list,
                value: '',
            };
        });
    };

    render() {
        const list =this.state.list
        const techCompanies = [
            { label: "Apple", value: 1 },
            { label: "Facebook", value: 2 },
            { label: "Netflix", value: 3 },
            { label: "Tesla", value: 4 },
            { label: "Amazon", value: 5 },
            { label: "Alphabet", value: 6 },
          ];
          
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
              

           <form onClick={this.onAddItem} onChange={this.onChangeValue}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.onChangeValue} />
        </label>
        <input type="submit" value="Submit" onClick={this.onAddItem} />
      </form>

          <div >
              {console.log(list)}
              {console.log(techCompanies)}


        <Select options={ techCompanies } />
      </div>
    
     

      <CatDog />
    

            </div>
        );
    }
}

export default Math