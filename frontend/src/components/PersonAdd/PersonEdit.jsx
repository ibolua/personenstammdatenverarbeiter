import React, { useEffect, useState } from "react";
import axios from "axios";
import Salutation from "./Salutation";
import Firstname from "./Firstname";
import Lastname from "./Lastname";
import Email from "./Email";
import Birthday from "./Birthday";
import AddressList from "./Address/AddressList";
import { usePersonForm } from "./PersonFormContext";
import { useNavigate, useParams } from "react-router-dom";
import StatusBar from "../StatusBar";

function PersonEdit() {
  const navigate = useNavigate();
  const { personData, setPersonData, errors, validateForm } = usePersonForm();
  const [successInfo, setSuccessInfo] = useState("");
  const [errorInfo, setErrorInfo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const response = await axios.get(`/api/person/${id}`);
        if (response.status === 200) {
          setPersonData(response.data);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Person", error);
      }
    };

    fetchPersonData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("personData: ", personData);

    if (!validateForm()) {
      console.error("Validierungsfehler: ", errors);
      return;
    }

    try {
      const response = await axios.put(`/api/person/${id}`, personData);
      if (response.status === 200) {
        console.log("response.data: ", response.data);
        setSuccessInfo("Person erfolgreich bearbeitet");
        setErrorInfo("");
      }
    } catch (error) {
      console.error("Failed too edit a Person", error);
      setErrorInfo("Bei der Bearbeitung gab es einen Fehler");
      setSuccessInfo("");
    }
  };

  return (
    <>
      <StatusBar pageinfo="Person Bearbeiten" />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-ase-secondary-mustard  hover:bg-ase-tertiary-warmgrey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ase-primary-blue">
            Zurück
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow p-6 rounded-lg">
          <Salutation />
          <Firstname />
          <Lastname />
          <Email />
          <Birthday />
          <AddressList />
          {successInfo && <div className="text-green-600 font-bold"> {successInfo}</div>}
          {errorInfo && <div className="text-red-600 font-bold"> {errorInfo}</div>}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-ase-primary-blue hover:bg-ase-blue-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ase-primary-blue">
              Speichern
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonEdit;
