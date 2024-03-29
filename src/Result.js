import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Result = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default Result;
