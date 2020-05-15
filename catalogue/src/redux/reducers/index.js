import { ADD_SERVER, ADD_APPLICATION, ADD_DATABASE } from "../constants/index";

const initialState = {
  servers: [],
  databases: [],
  applications: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_APPLICATION) {
    return {
      servers: state.servers,
      databases: state.databases,
      applications: state.applications.concat(action.payload.application),
    };
  }
  if (action.type === ADD_SERVER) {
    return {
      servers: state.servers.concat(action.payload.server),
      databases: state.databases,
      applications: state.applications,
    };
  }
  if (action.type === ADD_DATABASE) {
    return {
      applications: state.applications,
      databases: state.databases.concat(action.payload.database),
      servers: state.servers,
    };
  }
  return state;
}

export default rootReducer;
