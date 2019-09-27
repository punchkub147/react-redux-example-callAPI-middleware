import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import actions from "../actions";

const Entities = props => {
  const [user, setUser] = useState("");
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <button onClick={() => props.actions.fetchEntities(user)}>SEARCH</button>
      <span>{props.loading ? "LOADING..." : ""}</span>
      <div>{props.error ? props.error : ""}</div>
      <div>{JSON.stringify(props.entities)}</div>
      <button onClick={() => props.actions.updateEntity("value")}>
        UPDATE
      </button>
    </div>
  );
};

export default connect(
  state => ({
    entities: state.entities.entities,
    loading: state.entities.loading,
    error: state.entities.error
  }),
  actions
)(Entities);
