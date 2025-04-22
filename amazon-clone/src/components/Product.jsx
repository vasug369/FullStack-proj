import React from 'react'
import "./Product.css";
import { useStateValue } from "../context/StateProvider";


function Product({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id,
            title,
            image,
            price,
            rating,
          },
        });
      };

    return (

        // note:: using BEM (BLock__element--Modifier ) convention here to avoid conflict in css class names

        <div className="product">
            <div className="product__info">
                <p>{title}</p>
            </div>
            <img src={image} alt="" />
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

            <button onClick={addToBasket} style={{cursor:'pointer',borderRadius:'10px'}}>Add to Basket</button>
        </div>
    )
}

export default Product
