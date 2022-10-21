import React from "react";

const Cards = ({ name, price }) => {
  const [adding, setaddcount] = React.useState(0);
  const increase = () => setaddcount((a) => a + 1);

  const decrease = () => setaddcount((a) => a - 1);
  return (
    <div className="product_section">
      <div className="product_card">
        <h4>{name}</h4>
        <b>{price}</b>
        {!adding ? (
          <div className="btn__container">
            <button className="control__btn" onClick={increase}>
              Add to cart
            </button>
          </div>
        ) : (
          <div className="btn__container">
            <h3>{adding}</h3>
            <button className="control__btn" onClick={increase}>
              +
            </button>
            <button className="control__btn" onClick={decrease}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
