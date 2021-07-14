export const fetchQuote = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_QUOTE'})
      fetch('http://localhost:3001/api/v1/quotes') 
      .then(response => response.json())
      .then(entrie => dispatch({ type: 'ADD_QUOTE', payload: entrie}));
    }
  }