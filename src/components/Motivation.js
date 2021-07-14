import React from 'react';
import { fetchQuote } from "../actions/fetchQuote";
import { connect } from 'react-redux'
import Quote from './Quote'

 class Motivation extends React.Component {

    componentDidMount = () => {
        this.props.fetchQuote()
    }
  
    handleLoading = () => {
        console.log(this.props.entries)
        if(this.props.entries.length !== 0) {
            return <Quote entries={this.props.entries} />
        }
    }

    render() {
        return (
            <div>
                Here's Some Wise Words
                {this.handleLoading()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
      entries: state.entries,
      loading: state.loading
    }
  }


  export default connect(mapStateToProps, { fetchQuote })(Motivation)