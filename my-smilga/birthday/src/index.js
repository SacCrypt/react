import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
let data = [
  {
    id: 1,
    name: "Harry Styles",
    age: 24,
    img: null,
  },
  {
    id: 2,
    name: "Jagdamba Banaraswale",
    age: 89,
    img: null,
  },
  {
    id: 3,
    name: "Bunty bhutia",
    age: 33,
    img: null,
  },
  {
    id: 4,
    name: "Chinku jhunjhunwala",
    age: 19,
    img: null,
  },
  {
    id: 5,
    name: "Simran Kataria",
    age: 29,
    img: null,
  },
];

const Birthday = () => {
  const [curState, setState] = useState(data);
  const clearAll = () => {
    setState([]);
  };
  const remove = (id) => {
    setState((prev) =>
      prev.filter((v) => {
        return v.id !== id;
      })
    );
  };
  return (
    <>
      {curState.map((person, index) => {
        let { id, name, age, img } = person;

        return (
          <div key={id}>
            <img src={img} alt="" />
            <h2> {name} </h2>
            <h2> {age} </h2>
            <button onClick={() => remove(id)}>Delete</button>
          </div>
        );
      })}
      <button onClick={() => clearAll()}> Clear All</button>
    </>
  );
};

root.render(
  <>
    <Birthday />
  </>
);

/*
import * as React from "react";
import ReactDOM from "react-dom/client";

export default function Page() {
  const [list, setList] = React.useState(() => data);

  function _onClick(id) {
    setList((prevList) => prevList.filter((v) => v.id !== id));
  }

  return list.map(({ id, name }) => (
    <Item key={id} name={name} onClick={() => _onClick(id)} />
  ));
}

const Item = ({ name, onClick }) => <div onClick={onClick}>{name}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Page />
  </>
);

const data = [
  {
    id: 1,
    name: "Harry Styles",
    age: 24,
    img: null,
  },

  {
    id: 2,
    name: "Jagdamba Banaraswale",
    age: 89,
    img: null,
  },
  {
    id: 3,
    name: "Bunty bhutia",
    age: 33,
    img: null,
  },
  {
    id: 4,
    name: "Chinku jhunjhunwala",
    age: 19,
    img: null,
  },
  {
    id: 5,
    name: "Simran Kataria",
    age: 29,
    img: null,
  },
];
*/
