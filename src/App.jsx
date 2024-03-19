import { useState } from "react";

import Login from "./components/Login"
import PizzaCatalogue from "./components/PizzaCatalogue";

function App() {
  
  const buttons = ["Catalogue", "Connexion"]
  const [main, setMain] = useState(buttons[0]);

  return (
    <div className="App">

      <div className="header">
          {buttons.map((btn) => (
              <button key={btn} onClick={() => setMain(btn)}>
                  {btn}
              </button>
          ))}
      </div>

      <div className="main">
        {main === "Catalogue" && <PizzaCatalogue></PizzaCatalogue>}
        {main === "Connexion" && <Login></Login>}
      </div>

    </div>
  );
}

export default App;