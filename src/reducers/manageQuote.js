export default function manageQuote(state = {
    entry: [],
    loading: false
  }, action) {
    switch (action.type) {
      case 'LOADING_QUOTE':
        return {
          ...state,
          entry: state.entry,
          loading: true
        }
      case 'ADD_QUOTE':
        return {
          ...state,
          entry: action.payload,
          loading: false
        }
      case 'LOADING_UNAPPROVED':
        return {
          ...state,
          entry: state.entry,
          loading: true
        }   
      case 'ADD_UNAPPROVED':
      return {
        ...state,
        entry: action.payload,
        loading: false
      }    
      case 'SEND_QUOTE':
        return {
          ...state,
          entry: action.payload
        }
      default:
        return state;
    }
  };