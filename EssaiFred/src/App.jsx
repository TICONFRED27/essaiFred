import MyTitle from "./assets/components/MyTitle";
import Fred from "./assets/components/Fred";
import SayHello from "./assets/components/SayHello";
import PropTypes from "prop-types";
import { useState } from "react";
import DisplayMessage from "./assets/components/DisplayMessage";
import InputMessage from "./assets/components/InputMessage";
import "./App.css";

//SayHello.propTypes = {
//name: PropTypes.string.isRequired,
//age: PropTypes.number.isRequired,
//};
function App() {
  const [message, setMessage] = useState("");
  //const [user, setUser] = useState({ name: "Bob" });

  //const handleClick = () => {
  //setUser({ name: "Alice" });
  //};

  //const [count, setCount] = useState(0);
  //const handleClick = () => {
  //setCount(count + 1);
  //};
  //const msg = "coucou";

  return (
    <>
      <InputMessage setMessage={setMessage} />
      <DisplayMessage message={message} />
    </>
  );

  //<div>
  //<p>{user.name}</p>
  //<button onClick={handleClick}>Click</button>
  //</div>

  //<div>
  // <div>
  // <p>{count}</p>
  //<button onClick={handleClick}>Click</button>
  //</div>

  //<MyTitle />
  //<Fred />
  //<p>{msg}</p>
  //<p>{msg.toUpperCase()}</p>
  //<SayHello name="fred" age={25} />;
  //</div>
}

export default App;
