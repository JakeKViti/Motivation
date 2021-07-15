import React from 'react';

export default class Quote extends React.Component {
    render() {
        return (
            <ol id="quote">
              
              <div key={this.props.entry.id}>
                <p>
                  {this.props.entry.quote}
                </p>
                <p>
                    Said by {this.props.entry.whosaid} in {this.props.entry.origin}    
                </p>
                <p>
                    Motivation was submitted by {this.props.entry.sentby}
                </p>
              </div>
            </ol>
          )
    }
};