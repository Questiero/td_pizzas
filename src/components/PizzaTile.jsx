import './PizzaTile.css'

function PizzaTile({pizza}) {

    const imgPath = "https://pizzas.shrp.dev/assets/";

    const ingredients = "(Base " + pizza.base + ", " + pizza.ingredients.join(", ") + ")";

    return (

        <div className="pizza-tile">

            <h3>{pizza.name}</h3>

            {<img className="pizza-img"
                  src={imgPath + pizza.image}
                  alt={pizza.name}
                  width="256" height="256"/>}

            <p className="pizza-price">{pizza.price}€</p>

            <p className="pizza-ingredients">{ingredients}</p>

            <button onClick={() => alert(pizza.name + " ajoutée au panier")}>
                ajouter au panier
            </button>

        </div>

    )
}

export default PizzaTile;