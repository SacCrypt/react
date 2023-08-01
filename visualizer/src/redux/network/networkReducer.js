import { types } from "./networkTypes";

const initialState = {
  nodes: [],
  edges: [],
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NODE:
      return {
        ...state,
        nodes: [...state.nodes, action.payload],
      };
    case types.DELETE_NODE:
      const index = state.nodes.indexOf(action.payload.id);
      if (index === -1) {
        return state;
      } else {
        return {
          ...state,
          nodes: state.nodes.filter((item) => item !== action.payload),
        };
      }
    case types.ADD_EDGE:
      const { id, edge, edgeWeight } = action.payload;
      const updatedEdge = {
        ...edge,
        from: state.nodes.find(
          (node) =>
            node.label.toLowerCase() === edge.from || node.label === edge.from
        )?.id,
        to: state.nodes.find((node) => node.label === edge.to)?.id,
        label: edgeWeight,
      };
      updatedEdge["id"] = id;
      return {
        ...state,
        edges: [...state.edges, updatedEdge],
      };
    case types.DELETE_EDGE:
      return {
        ...state,
        edges: state.edges.filter((item) => item !== action.payload),
      };
    case types.ADD_NODES:
      return {
        ...state,
        nodes: action.payload,
      };
    case types.ADD_EDGES:
      return {
        ...state,
        edges: action.payload,
      };
    case types.CLEAR_NETWORK:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default networkReducer;
