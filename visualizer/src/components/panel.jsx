import React, { useRef, useState } from "react";
import "../static/css/panel.css";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addEdge,
  addNode,
  addNodes,
  addEdges,
  editNode,
  editEdge,
  deleteNode,
  deleteEdge,
} from "../redux/";
import { saveAs } from "file-saver";
import { pink } from "@mui/material/colors";

const Panel = ({ handleClean }) => {
  const [open, setOpen] = useState(false);
  const [visited, setVisited] = useState(false);

  const initialState = {
    nodeName: "",
    nodeDescription: "",
    edgeName: { from: "", to: "" },
    edgeWeight: "",
    edgeDirection: "",
    group: "",
    newNodeName: "",
    delete: false,
    shape: "dot",
    size: 25,
  };
  const [inputObject, setInputObject] = useState(initialState);

  const [activeModal, setActiveModal] = useState("");
  const [displayEdit, setDisplayEdit] = useState(false);
  const state = useSelector((state) => state);

  const { nodes, edges } = state.present;
  const dispatch = useDispatch();

  const fileInputRef = useRef(null);

  const handleAdd = () => {
    if (activeModal === "Node") {
      if (!inputObject.nodeName) {
        setVisited(true);
        return;
      }
      if (inputObject.delete) {
        const { nodeName } = inputObject;
        dispatch(deleteNode({ nodeName }));
        setInputObject(initialState);
        setOpen(false);
        return;
      }
      if (displayEdit) {
        const { edgeName, edgeWeight, ...filteredObject } = inputObject;
        dispatch(editNode(filteredObject));
      } else {
        dispatch(
          addNode({
            label: inputObject.nodeName,
            description: inputObject.nodeDescription,
            group: inputObject.group,
            shape: inputObject.shape,
            size: inputObject.size,
          })
        );
      }
    } else {
      if (inputObject.edgeName.from && inputObject.edgeName.to) {
        const { edgeName, edgeWeight, edgeDirection } = inputObject;

        if (displayEdit) {
          if (inputObject.delete) {
            dispatch(
              deleteEdge({
                edge: edgeName,
              })
            );
            setInputObject(initialState);
            setOpen(false);
            return;
          }
          console.log("ran");
          dispatch(editEdge({ edgeName, edgeWeight, edgeDirection }));
        } else {
          dispatch(
            addEdge({
              edge: inputObject.edgeName,
              edgeWeight: inputObject.edgeWeight,
              edgeDirection: inputObject.edgeDirection,
            })
          );
        }
      } else {
        setVisited(true);
        return;
      }
    }
    setInputObject(initialState);
    setOpen(false);
  };

  const saveFile = () => {
    let serializedState = null;
    try {
      serializedState = JSON.stringify(state, null, 2);
    } catch (err) {
      console.error("Error while stringifying");
    }
    if (!serializedState) {
      return null;
    }
    const blob = new Blob([serializedState], { type: "application/json" });
    saveAs(blob, "state.json");
  };

  const handleLoad = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const parsedData = JSON.parse(reader.result);

          dispatch(addNodes(parsedData.present.nodes));
          dispatch(addEdges(parsedData.present.edges));
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };

      reader.readAsText(file);
    } else {
      console.error("Not a JSON file.");
    }
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
      <svg viewBox='0 0 407.096 407.096' onClick={saveFile}>
        <g>
          <g>
            <g>
              <path d='M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086 c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032 C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z'></path>
              <path d='M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08 c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z'></path>
            </g>
          </g>
        </g>
      </svg>
      <svg
        onClick={() => handleLoad()}
        style={{ fillRule: "evenodd" }}
        viewBox='0 0 114.88 122.88'
      >
        <path d='M108.58,118.8h-3.16a.33.33,0,0,1-.33-.33V96.65a2.13,2.13,0,0,0-.22-1l-.09-.14-.11-.12h0a1.32,1.32,0,0,0-.51-.31L104,95h0a2.39,2.39,0,0,0-.62-.08H73.76a1.91,1.91,0,0,0-1,.23h0l-.13.08v0l-.13.1h0a1.79,1.79,0,0,0-.42,1.29v21.81h0a.33.33,0,0,1-.33.33H68.18a.36.36,0,0,1-.23-.09l-5.49-5.51a.34.34,0,0,1-.13-.27V70.53a1.46,1.46,0,0,1,1.61-1.65H75.63a.34.34,0,0,1,.34.33V81.91a3.3,3.3,0,0,0,3.31,3.38H101a3.36,3.36,0,0,0,3.4-3.39V69.2a.33.33,0,0,1,.33-.33h3.77a1.45,1.45,0,0,1,1.66,1.6v46.67a1.44,1.44,0,0,1-1.59,1.65h0ZM61.73,11.9l20.33,19H61.73v-19ZM21.51,66.26a2.21,2.21,0,0,0-2.07,2.3,2.17,2.17,0,0,0,2.07,2.29H47V66.26Zm.69,15.29a2.2,2.2,0,0,0-2.06,2.29,2.17,2.17,0,0,0,2.06,2.29H47.71V81.55ZM21.48,35.7A2.21,2.21,0,0,0,19.41,38a2.17,2.17,0,0,0,2.07,2.29H43.55A2.19,2.19,0,0,0,45.61,38a2.17,2.17,0,0,0-2.06-2.29Zm0-15.28a2.2,2.2,0,0,0-2.07,2.29A2.17,2.17,0,0,0,21.51,25H32.94A2.2,2.2,0,0,0,35,22.71a2.17,2.17,0,0,0-2.06-2.29Zm0,30.56a2.21,2.21,0,0,0-2.07,2.3,2.17,2.17,0,0,0,2.07,2.29H61.39a2.21,2.21,0,0,0,2.06-2.29A2.18,2.18,0,0,0,61.39,51Zm71.89-17.3a3.39,3.39,0,0,0-2.46-3.27L61,1.25A3.34,3.34,0,0,0,58.34,0H6.09A6.08,6.08,0,0,0,0,6.08V110.25a6.08,6.08,0,0,0,6.09,6.08h41v-6.79H6.8V6.77H54.93V34.33a3.41,3.41,0,0,0,3.41,3.41H86.58V52.36h6.79V33.68ZM83.28,104.2H95A1.78,1.78,0,0,1,96.75,106h0A1.78,1.78,0,0,1,95,107.76H83.28A1.78,1.78,0,0,1,81.5,106h0a1.78,1.78,0,0,1,1.78-1.78Zm0,7.43H95a1.78,1.78,0,0,1,1.78,1.78h0A1.78,1.78,0,0,1,95,115.18H83.28a1.78,1.78,0,0,1-1.78-1.77h0a1.78,1.78,0,0,1,1.78-1.78ZM80.07,69.39h20.09V80.07a1.83,1.83,0,0,1-1.82,1.82H81.88a1.82,1.82,0,0,1-1.81-1.82V69.39ZM76,98.3h25.69a.3.3,0,0,1,.3.29v19.92a.31.31,0,0,1-.3.29H76a.29.29,0,0,1-.29-.29V98.6a.29.29,0,0,1,.29-.3ZM62.1,64.41h48.77a4,4,0,0,1,4,4v50.43a4,4,0,0,1-4,4H65.58l-.11-.11-7.3-6.54-.48-.32V68.4a4.16,4.16,0,0,1,4.41-4Z' />
      </svg>
      <svg onClick={() => handleClean()} viewBox='0 0 24 24' width='50'>
        <path d='M21.20709,2.79291a.99989.99989,0,0,0-1.41418,0L12.893,9.69275l1.41425,1.41418,6.89984-6.89984A.99989.99989,0,0,0,21.20709,2.79291Z' />
        <path d='M12.31055,16.13965c-1.51636-1.486-3.06219-3.01465-4.39972-4.57166l-.2193.12073-.00934.00513a6.87365,6.87365,0,0,1-4.88538.65833.65315.65315,0,0,0-.79443.69147A9.82176,9.82176,0,0,0,4.7807,19.17352a12.3232,12.3232,0,0,0,4.178-1.77637,14.79974,14.79974,0,0,1-2.44946,3.19507A12.05327,12.05327,0,0,0,8.696,21.76483a.64246.64246,0,0,0,.24408.04767.65283.65283,0,0,0,.47119-.20074,17.80072,17.80072,0,0,0,3.21582-4.88623l.08655-.188C12.57751,16.40375,12.44806,16.2746,12.31055,16.13965Z' />
        <path d='M13.36035,15.06885l.04742.04675.422-.844a1.612,1.612,0,0,0-.30194-1.86072l-1.65717-1.65717a1.612,1.612,0,0,0-1.86072-.30194L9.25,10.83173C10.50134,12.261,11.9469,13.68317,13.36035,15.06885Z' />
      </svg>
      <input
        type='file'
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept='.json'
      />
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
              justifyContent: "space-between",
            }}
          >
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                setInputObject(initialState);
                setDisplayEdit(false);
              }}
            >
              Create {activeModal}
            </p>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                setInputObject(initialState);
                setDisplayEdit(true);
              }}
            >
              Edit {activeModal}
            </p>
          </Box>
          {activeModal === "Node" ? (
            !displayEdit ? (
              <Box>
                <Box
                  sx={{
                    padding: "5px 20px",
                  }}
                  display='flex'
                  gap='1em'
                >
                  <TextField
                    className='nodeName'
                    required
                    label='Node Name'
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        nodeName: e.target.value,
                      })
                    }
                    value={inputObject.nodeName}
                    error={visited && !inputObject.nodeName}
                  />
                  <TextField
                    sx={{
                      width: "50%",
                    }}
                    label='Group'
                    onChange={(e) =>
                      setInputObject({ ...inputObject, group: e.target.value })
                    }
                    value={inputObject.group}
                  />
                  <TextField
                    sx={{
                      width: "40%",
                    }}
                    select
                    label='Shape'
                    value={inputObject.shape}
                  >
                    {[
                      "ellipse",
                      "circle",
                      "database",
                      "box",
                      "text",
                      "dot",
                      "image",
                      "circularImage",
                      "diamond",
                      "star",
                      "triangle",
                      "triangleDown",
                      "hexagon",
                      "square",
                      "icon",
                      "custom",
                    ].map((value, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={value}
                          onClick={(e) =>
                            setInputObject({
                              ...inputObject,
                              shape: e.target.firstChild.data,
                            })
                          }
                        >
                          {value}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </Box>
                <Box display='flex' padding='20px'>
                  <TextField
                    value={inputObject.size}
                    onChange={(e) =>
                      setInputObject({ ...inputObject, size: e.target.value })
                    }
                    label='Size'
                    type='number'
                  />
                  <TextField
                    multiline
                    sx={{
                      margin: "auto",
                      padding: "0 20px",
                    }}
                    placeholder='Description'
                    value={inputObject.nodeDescription}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        nodeDescription: e.target.value,
                      })
                    }
                  />
                </Box>
              </Box>
            ) : (
              <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'
                gap='1em'
              >
                <TextField
                  value={inputObject.nodeName}
                  required
                  label='Node Name'
                  onChange={(e) =>
                    setInputObject({ ...inputObject, nodeName: e.target.value })
                  }
                />
                <TextField
                  value={inputObject.newNodeName}
                  label='New Node Name'
                  onChange={(e) =>
                    setInputObject({
                      ...inputObject,
                      newNodeName: e.target.value,
                    })
                  }
                />
                <TextField
                  value={inputObject.nodeDescription}
                  label='New Node Description'
                  onChange={(e) =>
                    setInputObject({
                      ...inputObject,
                      nodeDescription: e.target.value,
                    })
                  }
                />
                <TextField
                  onChange={(e) =>
                    setInputObject({ ...inputObject, group: e.target.value })
                  }
                  value={inputObject.group}
                  label='New Node Group'
                />
                <TextField
                  sx={{
                    width: "50%",
                    marginTop: "5px",
                  }}
                  select
                  label='Shape'
                  value={inputObject.shape}
                >
                  {[
                    "ellipse",
                    "circle",
                    "database",
                    "box",
                    "text",
                    "image",
                    "circularImage",
                    "diamond",
                    "star",
                    "triangle",
                    "triangleDown",
                    "hexagon",
                    "square",
                    "icon",
                    "custom",
                  ].map((value, index) => {
                    return (
                      <MenuItem
                        key={index}
                        value={value}
                        onClick={(e) =>
                          setInputObject({
                            ...inputObject,
                            shape: e.target.firstChild.data,
                          })
                        }
                      >
                        {value}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <Box display='flex' width={"50%"} justifyContent='center'>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() =>
                          setInputObject({
                            ...inputObject,
                            delete: !inputObject.delete,
                          })
                        }
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label='Delete Node'
                  />
                </Box>
              </Box>
            )
          ) : !displayEdit ? (
            <Box display='flex' flexDirection='column' gap='1em'>
              <Box display='flex' justifyContent='space-around'>
                <TextField
                  required
                  label='From'
                  onChange={(e) =>
                    setInputObject({
                      ...inputObject,
                      edgeName: {
                        ...inputObject.edgeName,
                        from: e.target.value,
                      },
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
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-around'
              >
                <TextField
                  label='Weight'
                  onChange={(e) => {
                    return setInputObject({
                      ...inputObject,
                      edgeWeight: e.target.value,
                    });
                  }}
                  value={inputObject.edgeWeight}
                />
                <TextField
                  sx={{
                    width: "40%",
                  }}
                  select
                  label='Direction'
                  value={inputObject.edgeDirection}
                >
                  {["Straight", "Reversed", "Bidirectional", "Undirected"].map(
                    (value, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={value}
                          onClick={(e) =>
                            setInputObject({
                              ...inputObject,
                              edgeDirection: e.target.firstChild.data,
                            })
                          }
                        >
                          {value}
                        </MenuItem>
                      );
                    }
                  )}
                </TextField>
              </Box>
            </Box>
          ) : (
            <Box>
              <Box display='flex' justifyContent='space-around'>
                <TextField
                  value={inputObject.edgeName.from}
                  onChange={(e) =>
                    setInputObject({
                      ...inputObject,
                      edgeName: {
                        ...inputObject.edgeName,
                        from: e.target.value,
                      },
                    })
                  }
                  required
                  label='From Node'
                />
                <TextField
                  value={inputObject.edgeName.to}
                  onChange={(e) =>
                    setInputObject({
                      ...inputObject,
                      edgeName: { ...inputObject.edgeName, to: e.target.value },
                    })
                  }
                  required
                  label='To Node'
                />
              </Box>
              <Box marginTop='1em' display='flex' justifyContent='space-around'>
                <TextField
                  label='New Weight'
                  value={inputObject.edgeWeight}
                  onChange={(e) =>
                    setInputObject({
                      ...inputObject,
                      edgeWeight: e.target.value,
                    })
                  }
                />
                <TextField
                  sx={{
                    width: "40%",
                  }}
                  select
                  label='Direction'
                  value={inputObject.edgeDirection}
                >
                  {["Straight", "Reversed", "Bidirectional", "Undirected"].map(
                    (value, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={value}
                          onClick={(e) =>
                            setInputObject({
                              ...inputObject,
                              edgeDirection: e.target.firstChild.data,
                            })
                          }
                        >
                          {value}
                        </MenuItem>
                      );
                    }
                  )}
                </TextField>
              </Box>
              <Box display='flex' marginTop='1em' justifyContent='center'>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() =>
                        setInputObject({
                          ...inputObject,
                          delete: !inputObject.delete,
                        })
                      }
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label='Delete Edge'
                />
              </Box>
            </Box>
          )}

          <Box
            paddingBottom='1.25em'
            paddingRight='1em'
            display='flex'
            justifyContent='flex-end'
          >
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
                setDisplayEdit(false);
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
              onClick={() => {
                handleAdd();
                setDisplayEdit(false);
              }}
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
