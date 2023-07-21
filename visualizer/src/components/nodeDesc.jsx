import React, { useState } from "react";
import "../static/css/nodeDesc.css";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const NodeDesc = ({ data, ID }) => {
  const [nodeID, setNodeID] = useState(ID);
  const node = data.nodes.get(nodeID);
  const { nodes, edges } = useSelector((state) => state);
  const connectedNodeIds = data.edges
    .get({
      filter: (edge) => edge.from === nodeID || edge.to === nodeID,
    })
    .map((edge) => (edge.from === nodeID ? edge.to : edge.from));

  const connectedNodes = nodes.filter((node) =>
    connectedNodeIds.includes(node.id)
  );

  const handleRelationClick = (e) => {
    const relationNode = e.target.childNodes[0].data;
    const node = nodes.find((node) => node.label === relationNode);
    setNodeID(node.id);
  };

  const handleCancel = () => {};
  return (
    <div className='mainNodeDiv'>
      <div className='labelHeader'>
        <div>{node.label}</div>
        <svg
          onClick={() => handleCancel()}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='white'
        >
          <path
            d='M3.00012 3L21.0001 21'
            stroke='white'
            stroke-width='6'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M21.0001 3L3.00012 21'
            stroke='white'
            stroke-width='6'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>
      <div className='description'>
        <Typography variant='h6'>{node.description}</Typography>
        <Typography>
          <div className='relations'>
            Relations:
            {connectedNodes.map((node) => {
              return (
                <Button
                  key={node.id}
                  onClick={(e) => handleRelationClick(e)}
                  className='relationButton'
                  variant='contained'
                  size='large'
                  disableRipple
                  sx={{
                    backgroundColor: "#6042a1",
                    borderRadius: "12px",
                  }}
                >
                  {node.label}
                </Button>
              );
            })}
          </div>
        </Typography>
      </div>
    </div>
  );
};

export default NodeDesc;
