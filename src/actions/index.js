import { combindActions } from "../middlewares/thunk";
import { fetchEntities, updateEntity } from "./entities";

export default combindActions({
  fetchEntities,
  updateEntity
});
