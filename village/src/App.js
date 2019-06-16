import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null
    };
  }

  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log(err))
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteSmurf = (e, smurf) => {
    console.log(smurf)
    e.preventDefault();
  axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
      this.setState({
        smurfs: res.data
      })
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data })
      }) 
      .catch(err => console.log(err))
  }

  setUpdateSmurf = (e, smurf ) => {
    console.log(smurf)
    e.preventDefault();
    this.setState({ activeSmurf: smurf })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path='/smurf-form' render={props => <SmurfForm {...props} addSmurf={this.addSmurf} updateSmurf={this.updateSmurf} activeSmurf={this.state.activeSmurf}/> } />
        <Route path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} setUpdateSmurf={this.setUpdateSmurf} deleteSmurf={this.deleteSmurf} /> } />
      </div>
    );
  }
}

export default App;
