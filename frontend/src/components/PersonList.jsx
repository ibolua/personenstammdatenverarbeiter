import React, { useEffect } from "react";
import axios from "axios";
import Person from "./Person";
import StatusBar from "./StatusBar";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

function PersonList() {
  const persons = useStore((state) => state.persons);
  const setPersons = useStore((state) => state.setPersons);

  useEffect(() => {
    async function fetchPersons() {
      const response = await axios.get(`/api/person/all`);

      if (response.status === 200) {
        const fetchedPerson = response.data;
        console.log(fetchedPerson);
        setPersons([...fetchedPerson]);
      } else {
        console.log("not success");
      }
    }

    fetchPersons();
  }, []);

  const deletePerson = async (id) => {
    try {
      const response = await axios.delete(`/api/person/${id}`);
      if (response.status === 200) {
        setPersons(persons.filter((person) => person.id !== id));
      }
    } catch (error) {
      console.error("Failed too delete Person", error);
    }
  };

  const handleEditPersonButton = async () => {};

  const navigate = useNavigate();
  const handleCreatePersonButton = () => {
    navigate("/person-add");
  };

  return (
    <div>
      <StatusBar />
      <button onClick={handleCreatePersonButton}>Add Person</button>
      {persons.map((person) => (
        <div key={person.id}>
          <Person person={person} onDelete={deletePerson} onEdit={handleEditPersonButton} />
        </div>
      ))}
    </div>
  );
}

export default PersonList;
