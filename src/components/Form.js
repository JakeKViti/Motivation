import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Please write an you motivation here.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    

    handleChange = (event) =>{
      this.setState({value: event.target.value});
    }

    handleSubmit = (event) =>{
      alert(this.state.value + " will be submitted");
    event.preventDefault();

    }

    render() { 
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Motivation Here!:
          <br></br>
          <textarea value={this.state.message} onChange={this.handleChange} />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      );
    
    }
  }
  
