export const fetchUnapproved = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_UNAPPROVED'})
      fetch('https://ancient-lake-58391.herokuapp.com/api/v1/admin') 
      .then(response => response.json())
      .then(entry => dispatch({ type: 'ADD_UNAPPROVED', payload: unapproved}));
    }
  }