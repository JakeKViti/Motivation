import React from 'react';

export default class Quote extends React.Component {
    render() {
        return (
            <ol id="quote">
              {this.props.entry.map(quote => 
              <div key={quote.id}>
                <p>
                  {quote.quote}
                </p>
                <p>
                    Said by {quote.whosaid} in {quote.origin}    
                </p>
                <p>
                    Motivation was submitted by {quote.sentby}
                </p>
              </div>)}
            </ol>
          )
    }
};