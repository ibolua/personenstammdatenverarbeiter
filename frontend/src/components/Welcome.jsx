import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const showPerson = () => {
    console.log("peron Click");
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
