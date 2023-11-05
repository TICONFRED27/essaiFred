import MyTitle from "./assets/components/MyTitle";
import Fred from "./assets/components/Fred";
import SayHello from "./assets/components/SayHello";
import PropTypes from "prop-types";
import "./App.css";

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

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
