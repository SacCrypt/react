import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { DataSet } from "vis-data/esnext";
import { Network } from "vis-network/esnext";
import NodeDesc from "./nodeDesc";

const Space = () => {
  const networkContainerRef = useRef(null);
  const [displayNetwork, setDisplayNetwork] = useState(true);
  const [currentNode, setCurrentNode] = useState(null);
  const data = {
    nodes: useSelector((state) => new DataSet(state.present.nodes)),
    edges: useSelector((state) => new DataSet(state.present.edges)),
  };

  const options = {
    nodes: {
      shape: "dot",
      color: {
        border: "black",
        background: "#8065eb",
      },
      size: 30,
    },
    physics: false,
  };

  useEffect(() => {
    let network;
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
          radius = 30;
        }

        const updatedNode = { ...node, size: radius };
        data.nodes.update(updatedNode);
      }, 50);
    };

    if (data.nodes.length && networkContainerRef.current) {
      network = new Network(networkContainerRef.current, data, options);

      network.on("click", (event) => {
        const { nodes } = event;
        if (nodes.length > 0) {
          const nodeId = nodes[0];
          inflateCircularNode(nodeId);
        }
      });
    }

    return () => {
      if (network) {
        network.destroy();
      }
    };
  }, [data, options]);

  return (
    <>
      {displayNetwork ? (
        <div
          id='network'
          ref={networkContainerRef}
          style={{ width: "100%", height: "100%" }}
        ></div>
      ) : (
        <NodeDesc data={data} ID={currentNode} />
      )}
    </>
  );
};

export default Space;
