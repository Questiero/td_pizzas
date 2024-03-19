import { useState, useEffect } from "react";
import axios from "axios";

import PizzaTile from "./PizzaTile";

function PizzaCatalogue() {
  
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function loadPizzas() {

      const api = "https://pizzas.shrp.dev/items/pizzas?sort=name";

      try {

        setIsLoading(true);
        setIsError(false);

        const response = await axios.get(api);

        const data = await response.data.data;

        setPizzas(data);
        setIsLoading(false);
        setIsError(false);

      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.error(error);
      }
    }

    loadPizzas();

  }, []);

  return (
    <div className="pizza-catalogue">
      {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur s'est produite</p>}
      {pizzas.map((pizza) => (
        <PizzaTile key={pizza.id} pizza={pizza}></PizzaTile>
      ))}
    </div>
  );
}

export default PizzaCatalogue;