export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
    case 'ADD_BEER':
      newState = Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id,
          formattedWaitTime: formattedWaitTime
        }
      });
      return newState;

    case 'UPDATE_TIME':
      const newBeer = Object.assign({}, state[id], { formattedWaitTime });
      newState = Object.assign({}, state, {
        [id]: newBeer
      });
      return newState;

    default:
      return state;
  }
};