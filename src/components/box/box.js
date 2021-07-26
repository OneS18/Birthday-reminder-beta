import React, { useState } from "react";
import "./box.css";
import { data } from "./data";

const Box = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <>
      <h3
        style={{
          backgroundColor: "#fff",
          color: "#313174",
          textAlign: "center",
          fontSize: "36px",
          marginTop: "70px",
          borderRadius: "5px",
        }}
      >
        {people.length} birthdays today
      </h3>
      <button
        onClick={() => setPeople(data)}
        style={{
          color: "yellow",
          backgroundColor: "black",
          borderRadius: "3px",
        }}
      >
        restore notification
      </button>
      {people.map((person) => {
        const { id, name, image } = person;

        return (
          <div className="container" key={id}>
            <div className="avatar">
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </div>
            <div className="button">
              <button className="btn" onClick={() => removePerson(id)}>
                Dismiss
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Box;
