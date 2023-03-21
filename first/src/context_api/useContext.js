import React, { useContext, useState } from "react";
import { data } from "./drill";
const PersonContext = React.createContext();
const UseCont = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3> Context API/ useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const main_data = useContext(PersonContext);
  return (
    <>
      {main_data.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div>
      <h4 onClick={() => removePerson(id)}> {name} </h4>
    </div>
  );
};

export default UseCont;
