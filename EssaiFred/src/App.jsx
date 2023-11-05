import MyTitle from "./assets/components/MyTitle";
import Fred from "./assets/components/Fred";
import SayHello from "./assets/components/SayHello";
import "./App.css";

function App() {
  const msg = "coucou";
  return (
    <div>
      <MyTitle />
      <Fred />
      <p>{msg}</p>
      <p>{msg.toUpperCase()}</p>
      <SayHello name="fred" age={25} />;
    </div>
  );
}

export default App;
