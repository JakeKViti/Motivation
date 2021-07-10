import React from 'react';

export default class Form extends React.Component {
    state = {
        name: "Anon",
        message: "None",
        sayer: "Unknown",
        where: "Unknown",
        credit: false
    }

    handleNameChange = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    handleMessageChange = (event) => {
      this.setState({
        message: event.target.value
      })
    }

    handleSayerChange = (event) => {
      this.setState({
        sayer: event.target.value
      })
    }

    handleWhereChange = (event) => {
      this.setState({
        where: event.target.value
      })
    }

    handleCreditChange = (event) => {
      this.setState({
        credit: event.target.value
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
              onChange={this.handleNameChange}
            />
            </label>
            <br></br>
            <label>
              Motivational Message/Quote?
            <br></br>
            <textarea 
              rows="5" 
              cols="50"
              onChange={this.handleMessageChange}
            />
            </label>
            <br></br>
            <label>
              Original Sayer?
            <br></br>
            <input 
              type="text" 
              onChange={this.handleSayerChange}
            />
            </label>
            <br></br>
            <label>
              Where Did They Say It?
            <br></br>
            <input 
              type="text" 
              onChange={this.handleWhereChange}
            />
            </label>
            <br></br>
            <label>
              Credit You?
            <input 
              type="checkbox" 
              onChange={this.handleCreditChange}
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