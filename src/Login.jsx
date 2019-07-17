import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';

let data = [{
    "Title": "The Wizard of Oz",
    "Year": 1939,
    "Genre": "Fantasy"
  }, {
    "Title": "Citizen Kane",
    "Year": 1941,
    "Genre": "Drama"
  }, {
    "Title": "The Godfather",
    "Year": 1972,
    "Genre": "Drama"
  }, {
    "Title": "Metropolis",
    "Year": 1927,
    "Genre": "Science"
  }]
  
  const styles = {
    outerStyles: {
      html: {
        backgroundColor: '#efefef',
        height: "100%"
      },
      body: {
        padding: "0 2rem",
        minHeight: "100%",
        //display: "flex",
        //justifyContent: "center",
        //alignItems: "center"  
      }
    },
    cell: {
      borderBottom: "1px solid #ddd",
      padding: "10px"
    },
    table: {
      width: "100%",
      maxWidth: "600px",
      borderCollapse: "collapse",
      backgroundColor: "white",
      margin: "10vh auto",
      border: "1px solid #ddd",
      '@media screen and (max-width: 400px)': {
        backgroundColor: "unset",
        border: "none"
      }
    },
    thead: {
      fontWeight: "bold",
      textAlign: "left",
      '@media screen and (max-width: 400px)': {
        display: "none"
      }
    },
    block: {
      '@media screen and (max-width: 400px)': {
        display: "block",
      }
    },
    row: {
      '@media screen and (max-width: 400px)': {
        display: "block",
        borderLeft: "1px solid #ddd",
        borderRight: "1px solid #ddd",
        borderTop: "1px solid #ddd",
        marginBottom: "2rem",
        backgroundColor: "white"
      }
    },
    mobileTitle: {
      display: "none",
      float: "left",
      fontWeight: "bold",
      '@media screen and (max-width: 400px)': {
        display: "initial"
      }
    }
  }
  
  function sortByColumn(a, colIndex, reverse) {
    if (reverse == true) {
      a.sort(sortFunction).reverse();
    } else {
      a.sort(sortFunction);
    }
  
    function sortFunction(a, b) {
      if (a[colIndex] === b[colIndex]) {
        return 0;
      } else {
        return (a[colIndex] < b[colIndex]) ? -1 : 1;
      }
    }
    return a;
  }
  

  const Table = React.createClass({
    getInitialState: function() {
      return {
        data: this.props.data,
        toggle: false,
        activeColumn: 0,
        lastActiveColumn: 0,
      }
    },
    handleClick: function(title, key) {
      if (this.state.activeColumn === key) {
        let toggle = !this.state.toggle
        this.setState({
          toggle: toggle,
          activeColumn: key,
          rows: sortByColumn(this.state.data, title, toggle)
        })
      } else {
        this.setState({
          activeColumn: key,
          rows: sortByColumn(this.state.data, title, false)
        })
      }
    },
    render: function() {
      return (
        <table className="responsive-table">
          <thead>
            <tr>
              {Object.keys(this.state.data[0]).map((title, key) => {
                return (
                <th 
                 key={key} 
                 onClick={() => this.handleClick(title, key)} 
                 scope="col"
                 data-label={title} >
                 {title}
                 {(this.state.activeColumn === key) ? (this.state.toggle) ? " ↓": " ↑" : ""}
                </th>)
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(function(row, key) { 
              return (
                <tr key={key}>
                  {Object.keys(row).map(function(entry, key) {
                    return (
                      <td 
                        scope="row" 
                        key={key}
                        data-label={entry}>
                        {row[entry]}
                      </td> 
                    ) 
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }
  })
  
  const Login = React.createClass({
    render: function() {
      return (
        <div>
          <Table data={data} />
        </div>
      )
    }
  })
  
  export default Login
