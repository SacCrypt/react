const data = [
  {
    id: 1,
    name: "Susan",
  },
  {
    id: 2,
    name: "Nubba",
  },
  {
    id: 3,
    name: "Brethil",
  },
];

const Rem = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}> remove nigger</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear items</button>
    </>
  );
};

export default Rem;
