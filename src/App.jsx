import { useEffect, useState } from "react";

import "./App.css";
import { Title } from "./component/Title";

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      <div className="main-container">
        {state && <Title />}

        <button onClick={handleToggle}>Toggle</button>
      </div>
    </>
  );
}

export default App;
