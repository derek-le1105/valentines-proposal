import nope from "./assets/no.gif";

const No = () => {
  return (
    <>
      <h1>that's crazy</h1>
      <div>
        <img src={nope} className="logo" />
      </div>
      <button>
        <a href="/">try again</a>
      </button>
    </>
  );
};

export default No;
