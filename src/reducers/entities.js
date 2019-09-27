export default (state, action) => {
  switch (action.type) {
    case "EDIT_ENTITIES_SUCCESS":
      state.entities[action.value] = action.value;
      state.cache = {};
      return state;
    default:
      return state;
  }
};
