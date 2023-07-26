import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalprice } = useContext(CartContext);

  if (item.length === 0) {
    return (
       <>
       <header>
          <div className="continue-shopping">
             <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
              <h3>continue shopping</h3>
          </div>

           <div className="cart-icon">
             <img src="./images/cart.png" alt="cart" />
             <p>{totalItem}</p>
           </div> 
          </header>

        <section className="main-cart-section">
          
            <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }  

  return (
    <>
      <header>
        <div className="continue-shopping">
          
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        
        <p className="total-items">
          
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalprice}₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
       </section> 
    </>
  );
};

export default ContextCart;


