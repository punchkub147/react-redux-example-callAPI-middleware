const thunk = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

export const combindActions = actions => dispatch => ({
  actions: Object.keys(actions).reduce((result, key) => {
    result[key] = (...rest) => dispatch(actions[key](...rest));
    return result;
  }, {})
});

export default thunk;
