import React, { Component } from 'react';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = this.props.activeSmurf || {
      smurf: {
        name: '',
        age: '',
        height: '',
        id: 0,
      },
      active: false 
   }
  }
  componentDidUpdate(prevProps){
    if(this.props.activeSmurf && prevProps.activeSmurf !== this.props.activeSmurf) {
      this.setState({ 
        name: this.props.activeSmurf.name,
        age: this.props.activeSmurf.age,
        height:this.props.activeSmurf.height,
        id: this.props.activeSmurf.id,
        active: true
      })
    }
  }

  addSmurf = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  submitHandler = (e, smurf) => {
  
    if(this.state.active) {
      this.props.updateSmurf(e, this.state.smurf)
    } else{
      this.props.addSmurf(e, this.state.smurf)
    }
    this.setState({
        smurf: {
          name: '',
          age: '',
          height: '',
        },
        active: false 
  })
}

  render() {
    return (
      <div className="SmurfForm">
        {/* <form onSubmit={this.submitHandler}> */}
        <form onSubmit={this.addSmurf}>
          <div className='input-btn'>
            <input className='input'
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input className='input'
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input className='input'
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button className='sub-btn' type="submit">{`${this.state.active ? 'Update Village' : 'Add to the village'}`}</button>
           </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
