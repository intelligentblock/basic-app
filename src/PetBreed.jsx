import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import Select from 'react-select';



class PetBreed extends React.Component {
    state = {
        cats: [{name:"", breed:""}],
      pet: [{name:""}],
    }
  handleChange = (e) => {
      if (["name", "age"].includes(e.target.className) ) {
        let cats = [...this.state.cats]
        cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
        this.setState({ cats }, () => console.log(this.state.cats))
      } else {
        this.setState({ [e.target.name]: e.target.value.toUpperCase() })
      }
    }
  addCat = (e) => {
      this.setState((prevState) => ({
        cats: [...prevState.cats, {name:"", age:""}],
      }));
    }
  handleSubmit = (e) => { e.preventDefault() }
render(){
      let {owner, description, cats} = this.state
      const testing=cats.map(opt => ({ name: opt, age: opt }));
      return (
       
        <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
          <label htmlFor="name">Owner</label> 
          <input type="text" name="owner" id="owner" value={owner} />
          <label htmlFor="description">Description</label> 
          <input type="text" name="description" id="description" value={description} />
          <button onClick={this.addCat}>Add new cat</button>
          {
            cats.map((val, idx)=> {
              let catId = `cat-${idx}`, ageId = `age-${idx}`
              return (
                <div key={idx}>
                  <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                  <select> 
   {this.state.pet.map((cat) => <option value={cat.name}>{cat.name}</option>)}
   
    </select>
                  <label htmlFor={ageId}>Age</label>
                  <input
                    type="text"
                    name={ageId}
                    data-id={idx}
                    id={ageId}
                    value={cats[idx].age} 
                    className="age"
                  />
                </div>
                 
              )
            })
          }
          <input type="submit" value="Submit" />
   {console.log('cats')}
   <select> 
   {this.state.cats.map((cat) => <option value={cat.name}>{cat.name}</option>)}
   
    </select>
        </form>
      )
    }
}
  export default PetBreed