import React from 'react';

export default class Form extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Submit Successful")
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
            Label
            <input 
                type="text" 
            />
            </label>
            <input 
            type="submit" 
            value="Submit" 
            />
          </form>
        );
      } 
};