import React from 'react';

export default class Form extends React.Component {
    state = {
        name: "Anon",
        message: "None",
        sayer: "Unknown",
        where: "Unknown"
    }

    handleChange = (event) => {
      debugger
      this.setState({
        
      })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        debugger
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Your Name?
            <br></br>
            <input 
              type="text" 
            />
            </label>
            <br></br>
            <label>
              Motivational Message/Quote?
            <br></br>
            <textarea 
              rows="5" 
              cols="50"
            />
            </label>
            <br></br>
            <label>
              Original Sayer?
            <br></br>
            <input 
              type="text" 
            />
            </label>
            <br></br>
            <label>
              Where Did They Say It?
            <br></br>
            <input 
              type="text" 
            />
            </label>
            <br></br>
            <label>
              Credit You?
            <input 
              type="checkbox" 
            />
            </label>
            <br></br>
            <input 
              type="submit" 
              value="Submit" 
            />
          </form>
        );
      } 
};