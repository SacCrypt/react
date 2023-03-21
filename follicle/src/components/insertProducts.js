import { useState } from "react";
import style from "../static/css/addProducts.module.css";
import { Rating } from "react-simple-star-rating";
import axios from "axios";

const Rate = ({ info, setInfo }) => {
  const handleRating = (rate) => {
    setInfo((prev) => {
      return { ...prev, Rating: rate };
    });
  };
  return (
    <Rating
      size={30}
      className={style.rating}
      fillColor="#ffbc0b"
      onClick={handleRating}
      initialValue={info.Rating}
    />
  );
};

const Insert = () => {
  const options = ["Shampoo", "Solution", "Color", "All", "Edible"];
  const defaultState = {
    Name: "",
    Manufacturer: "",
    Price: "",
    Rating: 0,
    Category: "Shampoo",
  };

  const [info, setInfo] = useState(defaultState);
  const handleChange = (e) => {
    const name =
      e.target.tagName === "SELECT" ? "Category" : e.target.placeholder;
    const value = e.target.value;
    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log(info);
    axios
      .post("http://127.0.0.1:5000/products/addProducts", info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setInfo(defaultState);
  };

  return (
    <div>
      <div className={style.outermost}>
        <h2> Add Products </h2>

        <div className={style.container}>
          <select onChange={handleChange} className={style.selectClass}>
            {options.map((product, index) => (
              <option key={index} value={product}>
                {" "}
                {product}
              </option>
            ))}
          </select>
          <input
            className="required"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            value={info.Name}
            required
          />
          <input
            className="required"
            onChange={handleChange}
            type="text"
            placeholder="Manufacturer"
            value={info.Manufacturer}
            required
          />
          <input
            className="required"
            onChange={handleChange}
            type="text"
            placeholder="Price"
            value={info.Price}
            required
          />
          <Rate info={info} setInfo={setInfo} />
          <button onClick={handleSubmit} className={style.addBut} type="submit">
            {" "}
            Add{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insert;
