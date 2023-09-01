import Tours from "./Tours";

function Card({ id, image, info, price, name, removeTour }) {
  return (
    <div className="card">
      <img src={image} className="image" />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹{price}</h4>

          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">{info}</div>
      </div>
      <button className="btn" onClick={() => removeTour(id)}>
        Remove
      </button>
    </div>
  );
}
export default Card;
