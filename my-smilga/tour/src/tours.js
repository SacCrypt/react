import React, { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";

const getData = async () => {
  const response = await fetch(url);

  return response.json();
};

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [show, setShow] = useState(false);
  const handleClick = (blah) => {
    setTours((tours) =>
      tours.filter((t) => {
        return t.id !== blah;
      })
    );
  };
  useEffect(() => {
    getData()
      .then((data) => {
        setTours(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        tours.map((tour) => {
          const { id, name, info, image, price } = tour;

          return (
            <div key={id}>
              <h6>{name}</h6>
              <p> {show ? info : info.slice(0, info.length / 2)} </p>
              <button onClick={() => setShow(!show)}>
                {" "}
                {show ? "Show Less" : "Read More"}
              </button>
              <img width={150} src={image} alt={name} />
              <b> ${price}</b>
              <button onClick={() => handleClick(id)}> Not Interested </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Tours;
