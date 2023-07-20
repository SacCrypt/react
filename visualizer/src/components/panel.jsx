import React, { useState } from "react";
import "../static/css/panel.css";
import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addEdge, addNode } from "../redux/";
import { saveAs } from "file-saver";

const Panel = () => {
  const [open, setOpen] = useState(false);
  const [visited, setVisited] = useState(false);
  const initialState = {
    nodeName: "",
    edgeName: { from: "", to: "" },
  };
  const [inputObject, setInputObject] = useState(initialState);
  const [nodeIdentifier, setNodeIdentifier] = useState(1);
  const [edgeIdentifier, setEdgeIdentifier] = useState(1);
  const [activeModal, setActiveModal] = useState("");
  const state = useSelector((state) => state);
  const { nodes, edges } = state;
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (activeModal === "Node") {
      if (!inputObject.nodeName) {
        setVisited(true);
        return;
      }
      setNodeIdentifier((id) => id + 1);
      dispatch(addNode({ id: nodeIdentifier, label: inputObject.nodeName }));
      setInputObject(initialState);
      setOpen(false);
    } else {
      if (inputObject.edgeName.from && inputObject.edgeName.to) {
        setEdgeIdentifier((id) => id + 1);
        dispatch(addEdge({ id: edgeIdentifier, edge: inputObject.edgeName }));
        setInputObject(initialState);
        setOpen(false);
      } else {
        setVisited(true);
        return;
      }
    }
  };

  const saveFile = () => {
    let serializedState = null;
    try {
      serializedState = JSON.stringify(state, null, 2);
    } catch (error) {
      console.error("Error while stringifying");
    }
    if (!serializedState) {
      return null;
    }
    const blob = new Blob([serializedState], { type: "application/json" });
    saveAs(blob, "state.json");
  };

  return (
    <div className='mainContainer'>
      <svg
        onClick={() => {
          setVisited(false);
          setOpen(true);
          setActiveModal("Node");
        }}
        viewBox='0 0 1 1'
        className='node'
      >
        <circle r='0.5' cx='0.5' cy='0.5' />
      </svg>
      <svg
        onClick={() => {
          setVisited(false);
          setOpen(true);
          setActiveModal("Edge");
        }}
        viewBox='0 0 1 1'
        className='edge'
      >
        <line x1='0' y1='100%' x2='100%' y2='0' />
      </svg>
      <svg
        fill='#6042a1'
        version='1.1'
        id='Capa_1'
        viewBox='0 0 407.096 407.096'
        xmlSpace='preserve'
        onClick={saveFile}
        style={{ cursor: "pointer" }}
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <g>
            <g>
              <path d='M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086 c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032 C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z'></path>
              <path d='M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08 c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z'></path>
            </g>
          </g>
        </g>
      </svg>
      <Modal className='modal' open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "12px",
            overflow: "hidden",
          }}
          className='container'
        >
          <Box
            sx={{
              width: "100%",
              marginBottom: "1em",
              height: "3em",
              backgroundColor: "#6042a1",
              color: "white",
              fontSize: "1.5em",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              padding: "1em",
            }}
          >
            Create {activeModal}
          </Box>
          {activeModal === "Node" ? (
            <Box display='flex' justifyContent='space-around'>
              <TextField
                className='nodeName'
                required
                label='Node Name'
                onChange={(e) =>
                  setInputObject({ ...inputObject, nodeName: e.target.value })
                }
                value={inputObject.nodeName}
                error={visited && !inputObject.nodeName}
              />
              <TextField
                sx={{
                  width: "50%",
                }}
                select
                label='Select Relationship'
                defaultValue=''
              >
                {nodes.length > 0 ? (
                  nodes.map((node) => (
                    <MenuItem key={node.id} value={node.label}>
                      {node.label}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value=''>No Nodes Available</MenuItem>
                )}
              </TextField>
            </Box>
          ) : (
            <Box display='flex' justifyContent='space-around'>
              <TextField
                required
                label='From'
                onChange={(e) =>
                  setInputObject({
                    ...inputObject,
                    edgeName: { ...inputObject.edgeName, from: e.target.value },
                  })
                }
                value={inputObject.edgeName.from}
                error={visited && !inputObject.edgeName.from}
              />
              <TextField
                required
                label='To'
                onChange={(e) => {
                  return setInputObject({
                    ...inputObject,
                    edgeName: { ...inputObject.edgeName, to: e.target.value },
                  });
                }}
                value={inputObject.edgeName.to}
                error={visited && !inputObject.edgeName.to}
              />
            </Box>
          )}

          <Box padding='2em' display='flex' justifyContent='flex-end'>
            <Button
              sx={{
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "#db1229",
                  color: "white",
                },
              }}
              className='cancelButton'
              variant='text'
              onClick={() => {
                setInputObject(initialState);
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#42d93d",
                  color: "white",
                },
              }}
              onClick={handleAdd}
              className='okButton'
              variant='text'
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Panel;
