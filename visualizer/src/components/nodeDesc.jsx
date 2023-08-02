import React, { useState } from "react";
import "../static/css/nodeDesc.css";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Space from "./space";

const NodeDesc = ({ data, ID }) => {
  const [cancel, setCancel] = useState(true);
  const [nodeID, setNodeID] = useState(ID);
  const node = data.nodes.get(nodeID);
  const { nodes, edges } = useSelector((state) => state.present);
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

  return cancel ? (
    <div className='mainNodeDiv'>
      <div className='labelHeader'>
        <div>{node.label}</div>
        <svg
          onClick={() => setCancel(false)}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='white'
          strokeWidth={3}
        >
          <path d='M3.00012 3L21.0001 21' stroke='white' />
          <path d='M21.0001 3L3.00012 21' stroke='white' />
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
        <Typography>
          <div className='groups'>
            Groups:
            <Button
              className='groupButton'
              variant='contained'
              size='large'
              sx={{
                backgroundColor: "#6042a1",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                },
              }}
            >
              {node.group || "None"}
            </Button>
          </div>
        </Typography>
      </div>
    </div>
  ) : (
    <Space />
  );
};

export default NodeDesc;
