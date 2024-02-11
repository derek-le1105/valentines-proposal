const Button = ({ string }) => {
  const text = string;

  return (
    <button className={text.toLowerCase()}>
      <a href={`/${text.toLowerCase()}`}>{text}</a>
    </button>
  );
};

export default Button;
