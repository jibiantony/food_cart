import React from "react";
import CartCards from "../../components/CartCards/CartCards";
import closebutton from "../../images/closebutton.svg"
import styles from "./MobileCart.module.scss"
import { useRecoilState, useRecoilValue } from "recoil";
import { CartList, sumOfQuantity ,cart} from "../../Recoil/cards";
const MobileCart = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useRecoilState(CartList);
  const totalPrice = useRecoilValue(sumOfQuantity);
  // eslint-disable-next-line no-unused-vars
  const [ mobileCart, setMobileCart] = useRecoilState(cart);
  return (
    <div className={styles.mobile_cart}>
      <div className={styles.cart_orders}>
        <div className={styles.title}>
          <p className={styles.content}>Current Order</p>
          <img src={closebutton} onClick={()=>{setMobileCart(false)}}/>
        </div>
        <div className={styles.cartlist}>
          {cartItems.map((item, index) => (
            <CartCards
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              itemnos={item.itemnos}
            />
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.price_detail1}>
          <p>Sub total</p>
          <p> $ {totalPrice}</p>
        </div>
        <div className={styles.price_detail1}>
          <p>discount Sales</p>
          <p>$ - 0.00</p>
        </div>
        <div className={styles.price_detail1}>
          <p>Total Sales after Tax</p>
          <p> $ 0.00</p>
        </div>
        <hr />
        <div className={styles.price_detail1}>
          <p className={styles.price}>Total</p>
          <p className={styles.price}> $ {totalPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default MobileCart;