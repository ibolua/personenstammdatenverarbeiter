import React, { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";
import StatusBar from "./StatusBar";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";

function PersonList() {
  const persons = useStore((state) => state.persons);
  const setPersons = useStore((state) => state.setPersons);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPersons() {
      try {
        const response = await axios.get(`/api/person/all`);
        if (response.status === 200) {
          setPersons(response.data);
        }
      } catch (error) {
        console.log("Error retrieving people from server");
        setError("Fehler beim Laden der Personen");
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
      <StatusBar pageinfo="Alle Personen" />
      <button onClick={handleCreatePersonButton}>Add Person</button>
      {error && <div>{error}</div>}
      {persons.map((person) => (
        <div key={person.id}>
          <Person person={person} onDelete={deletePerson} onEdit={handleEditPersonButton} />
        </div>
      ))}
    </div>
  );
}

export default PersonList;
