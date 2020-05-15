import { ADD_SERVER, ADD_APPLICATION, ADD_DATABASE } from "../constants/index";

export function addServer(payload) {
  return { type: ADD_SERVER, payload };
}

export function addApplication(payload) {
  return { type: ADD_APPLICATION, payload };
}

export function addDatabase(payload) {
  return { type: ADD_DATABASE, payload };
}
