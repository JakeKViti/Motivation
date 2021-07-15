import React from 'react';
import { sendQuote } from "../actions/sendQuote";
import { connect } from 'react-redux'
class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      name: "Anonymous",
      message: 'Please write your Motivation here.',
      credit: "Anonymous",
      origin: "Unknown"
    };

    this.handleMotivationChange = this.handleMotivationChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditChange = this.handleCreditChange.bind(this);
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCreditChange = (event) => {
    this.setState({
      credit: event.target.value
    });
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

    handleOriginChange = (event) =>{
      this.setState({
        origin: event.target.value
      });
    }

    handleSubmit = (event) =>{
    //alert(this.state.name + " name " + this.state.message + " " + this.state.credit + " will be submitted");
    event.preventDefault();
    const quote = {quote: {quote: this.state.message, whosaid: this.state.name, origin: this.state.origin, sentby: this.state.credit, approved: false}}
    this.props.sendQuote(quote)
    }

    render() { 
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your Motivation Here!:
            <br></br>
            <textarea value={this.state.message} onChange={this.handleMotivationChange} />
            <br></br>
          </label>
          <label>
            Said by who?:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            <br></br>
          </label>
          <label>
            Where It Was Said?:
            <input type="text" value={this.state.origin} onChange={this.handleOriginChange} />
            <br></br>
          </label>
          <label>
            How To Credit You?:
            <input type="text" value={this.state.credit} onChange={this.handleCreditChange} />
            <br></br>
          </label>
        <input type="submit" value="Submit" />
      </form>
      );
    
    }
  }

  
  const mapDispatchToProps = dispatch => {
    return {
      sendQuote: (entry) => {
        dispatch(sendQuote(entry))
      }
    };
  };
  
  export default connect(null, mapDispatchToProps)(Form);
