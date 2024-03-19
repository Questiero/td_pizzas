function PizzaPreview({pizza}) {
    return (
        <div>
            <h3>{pizza.name}</h3>
            <button onClick={() => alert("ajoutée au panier")}>
                ajouter au panier
            </button>
        </div>
    )
}

export default PizzaPreview;