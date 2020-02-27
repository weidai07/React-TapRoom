export default (state = {}, action) => {
    switch (action.type) {
    case 'SELECT_BEER':
      return action.beerId;
    default:
      return state;
    }
  };