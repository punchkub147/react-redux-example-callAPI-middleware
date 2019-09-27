import moment from "moment";
import { buildActionTypes } from "../reducers";
import api from "../utils/api";

const callAPI = store => next => action => {
  const state = store.getState();
  if (action.CALL_API) {
    const { model, enpoint } = action.CALL_API;
    if (model && enpoint) {
      const [START, SUCCESS, FAIL] = buildActionTypes(model);
      next({
        type: START
      });
      const cacheData = state[model.toLowerCase()].cache[enpoint];
      if (cacheData && cacheData.expiredAt > moment()) {
        next({
          type: SUCCESS,
          data: cacheData.data,
          enpoint,
          expiredAt: moment().add(1, "minutes")
        });
      } else {
        api(enpoint)
          .then(res => {
            next({
              type: SUCCESS,
              data: res,
              enpoint,
              expiredAt: moment().add(1, "minutes")
            });
          })
          .catch(err => {
            console.log("ERROR", err.message);
            next({
              type: FAIL,
              error: "Fetch Fail"
            });
          });
      }
    }
  } else {
    return next(action);
  }
};

export default callAPI;
