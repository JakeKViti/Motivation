export const fetchQuote = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_QUOTE'})
      fetch('http://localhost:3001/api/v1/quotes') 
      .then(response => response.json())
      .then(entry => dispatch({ type: 'ADD_QUOTE', payload: entry}));
    }
  }