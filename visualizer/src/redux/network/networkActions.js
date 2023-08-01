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

export const clearNetwork = () => {
  return {
    type: types.CLEAR_NETWORK,
  };
};

export const addNodes = (nodes) => {
  return {
    type: types.ADD_NODES,
    payload: nodes,
  };
};

export const addEdges = (edges) => {
  return {
    type: types.ADD_EDGES,
    payload: edges,
  };
};

export const undo = () => {
  return {
    type: types.UNDO,
  };
};

export const redo = () => {
  return {
    type: types.REDO,
  };
};
