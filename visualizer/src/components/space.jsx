import React, { useRef, useState } from "react";
import { DataSet, Network } from "vis-network/standalone";
import { useSelector } from "react-redux";
import NodeDesc from "./nodeDesc";

const Space = () => {
  const networkContainerRef = useRef(null);
  const [displayNetwork, setDisplayNetwork] = useState(true);
  const [currentNode, setCurrentNode] = useState(null);
  const data = {
    nodes: useSelector((state) => new DataSet(state.nodes)),
    edges: useSelector((state) => new DataSet(state.edges)),
  };

  const options = {
    nodes: {
      shape: "dot",
      color: {
        border: "black",
        background: "#8065eb",
      },

      size: 30,
      physics: false,
    },
  };

  if (data.nodes.length && networkContainerRef.current) {
    const network = new Network(networkContainerRef.current, data, options);

    const inflateCircularNode = (nodeId) => {
      const { clientHeight, clientWidth } = networkContainerRef.current;

      const node = data.nodes.get(nodeId);
      let radius = 30;

      const inflationSpeed = 100;

      const animationInterval = setInterval(() => {
        radius += inflationSpeed;
        if (radius > clientWidth) {
          clearInterval(animationInterval);
          setDisplayNetwork(false);
          setCurrentNode(nodeId);
        }

        node.size = radius;
        data.nodes.update(node);
        network.redraw();
      }, 50);
    };
    network.on("click", (event) => {
      const { nodes } = event;
      if (nodes.length > 0) {
        const nodeId = nodes[0];
        inflateCircularNode(nodeId);
      }
    });
  }
  return (
    <>
      {displayNetwork ? (
        <div
          id='network'
          ref={networkContainerRef}
          style={{ width: "100%", height: "100%" }}
        ></div>
      ) : (
        <NodeDesc data={data} nodeID={currentNode} />
      )}
    </>
  );
};

export default Space;
