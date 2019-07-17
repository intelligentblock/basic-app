import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import Select from 'react-select';


class CatDog extends React.Component {
    state = {
        petList: [{ pet:[],name: "", breed: "" }],
        pet: [{ name: "" }],
    }

    handleChange = (e) => {
        if (["name"].includes(e.target.className)) {
            let pet = [...this.state.pet]
            pet[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
            this.setState({ pet }, () => console.log(this.state.pet))
        } else {
            this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    }


    handlePetListChange = (e) => {
        if (["name", "age"].includes(e.target.className)) {
            let petList = [...this.state.petList]
            petList[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
            this.setState({ petList }, () => console.log(this.state.petList))
        } else {
            this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    }

    addPet = (e) => {
        this.setState((prevState) => ({
            pet: [...prevState.pet, { name: "" }],
        }));
    }

    addbre = (e) => {
        this.setState((prevState) => ({
            petList: [...prevState.petList, { name: "" }],
        }));
    }

    handleSubmit = (e) => { e.preventDefault() }

    render() {
        return (

            <div>

                <PetName pet={this.state.pet} handleSubmit={this.handleSubmit} handleChange={this.handleChange} addPet={this.addPet} />

                <PetBre addbre={this.addbre} pet={this.state.pet} petList={this.state.petList} handleSubmit={this.handleSubmit} handlePetListChange={this.handlePetListChange} addPet={this.addPet} />

            </div>

        )

    }
}

const PetName = (props) => {

    let { pet } = props.pet

    return (
        <form onSubmit={props.handleSubmit} onChange={props.handleChange} >

            <button onClick={props.addPet}>Add new pet</button>
            {
                props.pet.map((val, idx) => {
                    let petId = `pet-${idx}`
                    return (
                        <div key={idx}>
                            <label htmlFor={petId}>{`pet #${idx + 1}`}</label>
                            <input
                                type="text"
                                name={petId}
                                data-id={idx}
                                id={petId}
                                value={props.pet[idx].name}
                                className="name"
                            />
                        </div>
                    )
                }

                )
            }
            <input type="submit" value="Submit" />
            {console.log('pet')}
            <select>
                {props.pet.map((cat) => <option value={cat.name}>{cat.name}</option>)}

            </select>
        </form>
    );
};


const PetBre = (props) => {
    let { petList } = props.petList
    let { pet } = props.pet

    return (
        <form onSubmit={props.handleSubmit} onChange={props.handlePetListChange} >

            <button onClick={props.addbre}>Add new pet</button>
            {
                props.petList.map((val, idx) => {
                    let petId = `pet-${idx}`, ageId = `age-${idx}`,namepet='namepet-${idx}'
                    return (
                        <div key={idx}>
                            <select name={namepet} data-id={idx}
                                id={namepet}  className="vname">
                            {props.pet.map((cat) => <option value={cat.name}>{cat.name}</option>)}

                            </select>
                            <label htmlFor={petId}>{`pet #${idx + 1}`}</label>
                            <input
                                type="text"
                                name={petId}
                                data-id={idx}
                                id={petId}
                                value={props.petList[idx].name}
                                className="name"
                            />
                            <label htmlFor={ageId}>Age</label>
                            <input
                                type="text"
                                name={ageId}
                                data-id={idx}
                                id={ageId}
                                value={props.petList[idx].age}
                                className="age"
                            />
                        </div>
                    )
                }

                )
            }
            <input type="submit" value="Submit" />
            {console.log('pet')}
            <select>
                {props.pet.map((cat) => <option value={cat.name}>{cat.name}</option>)}

            </select>
        </form>
    )
};


export default CatDog