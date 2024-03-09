import { types } from "./networkTypes";

const initialState = {
  nodeIdentifier: 0,
  edgeIdentifier: 0,
  nodes: [],
  edges: [],
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NODE:
      console.log(action.payload);
      return {
        ...state,
        nodeIdentifier: state.nodeIdentifier + 1,
        nodes: [
          ...state.nodes,
          {
            ...action.payload,
            id: state.nodeIdentifier + 1,
          },
        ],
      };
    case types.DELETE_NODE:
      const index = state.nodes.find(
        (node) => node.label === action.payload.nodeName
      );
      if (!index) {
        return state;
      } else {
        return {
          ...state,
          nodes: state.nodes.filter((item) => {
            return item.label !== action.payload.nodeName;
          }),
        };
      }
    case types.ADD_EDGE:
      const { edge, edgeWeight, edgeDirection } = action.payload;
      let direction;
      switch (edgeDirection) {
        case "Straight":
          direction = "to";
          break;
        case "Reversed":
          direction = "from";
          break;
        case "Undirected":
          direction = "";
          break;
        case "Bidirectional":
          direction = "to;from";
          break;
        default:
          direction = edge.arrows;
      }
      const updatedEdge = {
        ...edge,
        from: state.nodes.find(
          (node) =>
            node.label.toLowerCase() === edge.from || node.label === edge.from
        )?.id,
        to: state.nodes.find((node) => node.label === edge.to)?.id,
        label: edgeWeight,
        id: state.edgeIdentifier + 1,
        arrows: direction,
      };

      return {
        ...state,
        edges: [...state.edges, updatedEdge],
        edgeIdentifier: state.edgeIdentifier + 1,
      };
    case types.DELETE_EDGE: {
      const { edge } = action.payload;

      const id_from = state.nodes.find((node) => node.label === edge.from).id;
      const id_to = state.nodes.find((node) => node.label === edge.to).id;
      console.log(id_from, id_to);
      return {
        ...state,
        edges: state.edges.filter((item) => {
          return item.from !== id_from || item.to !== id_to;
        }),
      };
    }
    case types.ADD_NODES:
      return {
        ...state,
        nodes: action.payload,
        nodeIdentifier: state.nodeIdentifier + action.payload.length,
      };
    case types.ADD_EDGES:
      return {
        ...state,
        edges: action.payload,
        edgeIdentifier: state.edgeIdentifier + action.payload.length,
      };
    case types.CLEAR_NETWORK:
      return {
        ...initialState,
      };
    case types.EDIT_NODE:
      const { nodeName, nodeDescription, group, newNodeName, shape } =
        action.payload;
      return {
        ...state,
        nodes: state.nodes.map((node) => {
          if (node.label === nodeName) {
            console.log(node);
            return {
              ...node,
              label: newNodeName || node.label,
              group: group || node.group,
              description: nodeDescription || node.description,
              shape: shape,
            };
          }
          return node;
        }),
      };
    case types.EDIT_EDGE: {
      const { edgeWeight, edgeDirection, edgeName } = action.payload;
      let direction;
      switch (edgeDirection) {
        case "Straight":
          direction = "to";
          break;
        case "Reversed":
          direction = "from";
          break;
        case "Bidirectional":
          direction = "to;from";
          break;
        default:
          direction = "";
      }

      const id_from = state.nodes.find(
        (node) => node.label === edgeName.from
      ).id;
      const id_to = state.nodes.find((node) => node.label === edgeName.to).id;
      return {
        ...state,
        edges: state.edges.map((edge) => {
          if (edge.from === id_from && edge.to === id_to) {
            return {
              ...edge,
              arrows: edgeDirection !== "" ? direction : edge.arrows,
              label: edgeWeight !== "" ? edgeWeight : edge.label,
            };
          }
          return edge;
        }),
      };
    }
    default:
      return state;
  }
};

export default networkReducer;
