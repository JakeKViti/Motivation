export const fetchQuote = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_QUOTE'})
      fetch('https://ancient-lake-58391.herokuapp.com/api/v1/quotes') 
      .then(response => response.json())
      .then(entry => dispatch({ type: 'ADD_QUOTE', payload: entry}));
    }
  }