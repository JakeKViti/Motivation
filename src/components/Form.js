import React from 'react';

export default class Form extends React.Component {
    state = {
        message: " Enter Here"
    }

    handleChange = () =>{
      console.log("Test")
    }

    handleSubmit = () =>{
      console.log("Test")
    }

    render() { 
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Motivation Here!:
          <br></br>
          <textarea value={this.state.message} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
    
    }
  }
  
