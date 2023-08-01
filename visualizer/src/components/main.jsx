import React, { useEffect } from "react";
import Panel from "./panel";
import Space from "./space";
import "../static/css/main.css";
import { useDispatch } from "react-redux";
import { clearNetwork } from "../redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "z") {
        dispatch(UndoActionCreators.undo());
      } else if ((event.ctrlKey || event.metaKey) && event.key === "y") {
        dispatch(UndoActionCreators.redo());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleClean = () => {
    dispatch(clearNetwork());
  };
  return (
    <div className='main'>
      <Panel handleClean={handleClean} />
      <Space />
    </div>
  );
};

export default Main;
