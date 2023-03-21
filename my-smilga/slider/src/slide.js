import React, { useEffect, useState } from "react";
const data = [
  {
    id: 1,
    name: "Anna Johnson",
    role: "Web Developer",
    desc: "Nigga Pussie",
    img: null,
  },
  {
    id: 2,
    name: "Bill Smith",
    role: "Boss",
    desc: "Eat niggers",
    img: null,
  },
  {
    id: 3,
    name: "Susan Smith",
    role: "Web Designer",
    desc: "Dickhead",
    img: null,
  },
  {
    id: 4,
    name: "Majin Buu",
    role: "Security",
    desc: "Boooo!",
    img: null,
  },
];

const Slide = () => {
  const [index, setIndex] = useState(0);
  const [cur, setCur] = useState(index);
  useEffect(() => {
    console.log(index);
    if (index < 0) {
      setIndex(data.length - 1);
    }
    if (index >= data.length) {
      setIndex(0);
    }
    setCur(data[index]);
  }, [index, cur]);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index) => index + 1);
      setCur(data[(index + 1) % data.length]);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  });

  const { id, name, role, desc, img } = cur;
  return (
    <div>
      <div key={id}>
        <h1> {name} </h1>
        <h2> {role}</h2>
        <img src={img} />
        <p> {desc}</p>
        <button onClick={() => setIndex(index - 1)}> Left </button>
        <button onClick={() => setIndex(index + 1)}> Right </button>
      </div>
    </div>
  );
};

export default Slide;
