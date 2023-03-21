import { data } from "./data";

import React, { useState } from "react";

const Accord = () => {
  const [state, setState] = useState(data);
  return (
    <div>
      {state.map((temp) => {
        const { id, question, answer, expanded } = temp;
        return (
          <div key={id}>
            <h4> {question} </h4>
            {expanded ? <p>{answer}</p> : null}
            <button
              onClick={() =>
                setState((prev) =>
                  prev.map((e) => ({
                    ...e,
                    expanded: e.id === id ? !e.expanded : e.expanded,
                  }))
                )
              }
            >
              {" "}
              {expanded ? "-" : "+"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Accord;
