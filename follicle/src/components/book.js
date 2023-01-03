import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../static/css/book.module.css";
import background1 from "../static/images/barber.jpg";
import background2 from "../static/images/barber1.jpg";
import background3 from "../static/images/doctor-transformed.jpeg";
import background4 from "../static/images/doctor1.jpg";
import background5 from "../static/images/hairdresser.webp";
import background6 from "../static/images/hairdresser1.webp";

const Book = () => {
  const arr = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
  ];

  const randomIndex = Math.floor(Math.random() * arr.length);
  const [index, setIndex] = useState(randomIndex);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 < arr.length) return prev + 1;
        return 0;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [arr.length]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${arr[index]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
          height: "40rem",
          position: "relative",
        }}
      >
        <div className={style.header}>
          <h1> With us, you will look like the way you always wanted to.</h1>
        </div>
        <div className={style.inner}>
          <p>
            Book an appointment with a <Link to={"/Barber"}> Barber </Link>
          </p>
          <p>
            Book an appointment with a{" "}
            <Link to={"/Dresser"}>Hair Dresser </Link>
          </p>
          <p>
            Book an appointment with an{" "}
            <Link to={"/Expert"}> Hair Expert </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
