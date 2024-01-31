import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const showPerson = () => {
    navigate("/persons");
  };

  return (
    <div className="grid h-screen place-items-center bg-ase-primary-blue text-white">
      <button
        onClick={showPerson}
        className="px-6 py-3 bg-ase-secondary-mustard rounded-md hover:bg-ase-tertiary-warmgrey transition-colors">
        Show Persons
      </button>
    </div>
  );
}

export default Welcome;
