import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      name: "Anonymous",
      message: 'Please write your Motivation here.'
    };

    this.handleMotivationChange = this.handleMotivationChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (event) =>{
    this.setState({
      name: event.target.value
    });
  }

    handleMotivationChange = (event) =>{
      this.setState({
        message: event.target.value
      });
    }

    handleSubmit = (event) =>{
      alert(this.state.name + this.state.message + " will be submitted");
    event.preventDefault();

    }

    render() { 
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            <br></br>
          </label>
          <label>
            Enter Your Motivation Here!:
            <br></br>
            <textarea value={this.state.message} onChange={this.handleMotivationChange} />
          </label>
        <input type="submit" value="Submit" />
      </form>
      );
    
    }
  }
  
