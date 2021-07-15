import React from 'react';
import { fetchQuote } from "../actions/fetchQuote";
import { connect } from 'react-redux'
import Quote from './Quote'

 class Motivation extends React.Component {

    componentDidMount = () => {
        this.props.fetchQuote()
    }
  
    handleLoading = () => {
        console.log(this.props.entry)
        return <Quote entry={this.props.entry} />
    }

    render() {
        return (
            <div>
                Words To Live By
                {this.handleLoading()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        entry: state.entry,
      loading: state.loading
    }
  }


  export default connect(mapStateToProps, { fetchQuote })(Motivation)