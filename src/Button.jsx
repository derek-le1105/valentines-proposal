import { Link } from "react-router-dom";

const Button = ({ string }) => {
  const text = string;

  return (
    <button className={text.toLowerCase()}>
      <Link to={`${text.toLowerCase()}`}>{text}</Link>
    </button>
  );
};

export default Button;
