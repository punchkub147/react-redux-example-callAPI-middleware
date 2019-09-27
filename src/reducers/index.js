import { combineReducers } from "redux";
import { produce } from "immer";
import entities from "./entities";

const initialState = {
  entities: {},
  loading: false,
  error: "",
  cache: {}
};

export const buildActionTypes = storeName => {
  return [
    `FETCH_${storeName}_START`,
    `FETCH_${storeName}_SUCCESS`,
    `FETCH_${storeName}_FAIL`
  ];
};

const buildStore = (storeName, reducer) => {
  const [START, SUCCESS, FAIL] = buildActionTypes(storeName);
  return produce((state = initialState, action) => {
    reducer(state, action);
    switch (action.type) {
      case START:
        state.error = "";
        state.loading = true;
        return state;
      case SUCCESS:
        state.entities = action.data;
        state.loading = false;
        state.cache[action.enpoint] = {
          data: action.data,
          expiredAt: action.expiredAt
        };
        return state;
      case FAIL:
        state.entities = {};
        state.error = action.error;
        state.loading = false;
        return state;
      default:
        return state;
    }
  });
};

export default combineReducers({
  entities: buildStore("ENTITIES", entities)
});
