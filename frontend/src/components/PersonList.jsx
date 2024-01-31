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
  const [deleteSuccessInfo, setDeleteSuccessInfo] = useState("");
  const [deleteFailureInfo, setDeleteFailureInfo] = useState("");

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
        setDeleteSuccessInfo("Person gelöscht");
        setDeleteFailureInfo("");
      }
    } catch (error) {
      console.error("Failed too delete Person", error);
      setDeleteFailureInfo("Fehler beim Löschen der Person");
      setDeleteSuccessInfo("");
    }
  };

  const handleEditPersonButton = (id) => {
    navigate(`/person-edit/${id}`);
  };

  const navigate = useNavigate();
  const handleCreatePersonButton = () => {
    navigate("/person-add");
  };

  return (
    <div className="min-h-screen bg-ase-tertiary-grey-lighter text-gray-800">
      <StatusBar pageinfo="Alle Personen" />
      <div className="p-6">
        <button
          onClick={handleCreatePersonButton}
          className="mb-4 px-6 py-2 bg-ase-primary-blue text-white rounded hover:bg-ase-blue-2 transition-colors">
          Person hinzufügen
        </button>
        {error && <div className="text-red-600 font-bold">{error}</div>}
        <div className="grid gap-4">
          {deleteSuccessInfo && (
            <div className="text-green-600 font-bold"> {deleteSuccessInfo}</div>
          )}
          {deleteFailureInfo && <div className="text-red-600 font-bold"> {deleteFailureInfo}</div>}
          {persons.map((person) => (
            <div key={person.id} className="bg-white p-4 rounded shadow">
              <Person person={person} onDelete={deletePerson} onEdit={handleEditPersonButton} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonList;
