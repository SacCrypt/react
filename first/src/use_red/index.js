import React, { useState, useReducer } from "react";
import Red from "./reducer";

/* useReducer is
basically conditional useState,
where we handle state inside dispatch
function if action type matches */

const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const Index = () => {
  const reducer = (state, action) => {
    const newPeople = [...state.people, action.payload];
    //Always return previous state + modified changes
    if (action.type === "ADD_ITEM") {
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "Item Added",
      };
    }
    if (action.type === "NO_VALUE") {
      return { ...state, showModal: true, modalContent: "Please Enter Value" };
    }
    if (action.type === "CLOSE_MODAL") {
      return { ...state, isModalOpen: false };
    }
    if (action.type === "REMOVE_ITEM") {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, people: newPeople };
    }
    throw new Error("No matching action type");
  };
  const defaultState = {
    people: [],
    isModalOpen: true,
    modalContent: "hello",
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: newDate().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Red closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              return setName(e.target.value);
            }}
          />
        </div>
        <button type="submit"> Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4> {person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              Remove{" "}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
