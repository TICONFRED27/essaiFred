import MyTitle from "./assets/components/MyTitle";
import Fred from "./assets/components/Fred";
import "./App.css";

function App() {
  const msg = "coucou";
  return (
    <div>
      <MyTitle />
      <Fred />
      <p>{msg}</p>
      <p>{msg.toUpperCase()}</p>
    </div>
  );
}

export default App;
