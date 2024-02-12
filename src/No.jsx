import nope from "./assets/no.gif";
import { Link } from "react-router-dom";

const No = () => {
  return (
    <>
      <h1>that's crazy</h1>
      <div>
        <img src={nope} className="logo" />
      </div>
      <button>
        <Link to={"/"}>try again</Link>
      </button>
    </>
  );
};

export default No;
