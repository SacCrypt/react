import { types } from "./networkTypes";

export const addEdge = (edge) => {
  return {
    type: types.ADD_EDGE,
    payload: edge,
  };
};

export const deleteEdge = (edge) => {
  return {
    type: types.DELETE_EDGE,
    payload: edge,
  };
};

export const addNode = (node) => {
  return {
    type: types.ADD_NODE,
    payload: node,
  };
};

export const deleteNode = (node) => {
  return {
    type: types.DELETE_NODE,
    payload: node,
  };
};
