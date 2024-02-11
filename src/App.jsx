import minaLogo from "./assets/minasuji.gif";
import Button from "./Button";
import "./App.css";

function App() {
  return (
    <>
      <h1>Will you be my Valentine?</h1>
      <div>
        <img src={minaLogo} className="logo" />
      </div>

      <Button string="Yes"></Button>
      <Button string="No"></Button>
    </>
  );
}

export default App;
