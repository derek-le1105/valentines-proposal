import Happy from "./assets/happy.gif";
import { Link } from "react-router-dom";

const Yes = () => {
  return (
    <>
      <h1>See you on the 14th ma'am</h1>
      <div>
        <img src={Happy} className="logo" />
      </div>
      <button>
        <Link to={"/"}>Go back</Link>
      </button>
    </>
  );
};

export default Yes;
