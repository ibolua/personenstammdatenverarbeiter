import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const showPerson = () => {
    navigate("/persons");
  };

  return (
    <>
      <div>Hello</div>
      <button onClick={showPerson}>Persons</button>
    </>
  );
}

export default Welcome;
