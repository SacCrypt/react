import React, { useState } from "react";

const Multiple = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const age = e.target.age;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
      console.log(people);
    }
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <input
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Add Person{" "}
        </button>
      </form>
      {people.map((per) => {
        return (
          <div>
            <h1>{per.firstName}</h1>
            <h3>{per.age}</h3>
          </div>
        );
      })}
    </article>
  );
};

export default Multiple;
