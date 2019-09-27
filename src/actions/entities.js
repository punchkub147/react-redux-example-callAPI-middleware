export const fetchEntities = (id = "") => dispatch => {
  dispatch({
    CALL_API: {
      model: "ENTITIES",
      enpoint: `/todos/${id}`
    }
  });
};
export const updateEntity = (value = "") => dispatch => {
  dispatch({
    type: "EDIT_ENTITIES_SUCCESS",
    value
  });
};
