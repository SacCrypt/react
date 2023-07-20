import React from "react";
import "../static/css/nodeDesc.css";

const NodeDesc = ({ data, nodeID }) => {
  const node = data.nodes.get(nodeID);
  console.log(node);
  return (
    <div className='mainNodeDiv'>
      <div className='labelHeader'>
        <div>{node.label}</div>
      </div>
      <div>hello</div>
    </div>
  );
};

export default NodeDesc;
