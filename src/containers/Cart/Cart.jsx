import CartCards from "../../components/CartCards/CartCards";
import settings from "../../images/settings.svg";
import styles from "./Cart.module.scss";
import MenuList from "../../service/MenuList"; 
import { useRecoilState } from "recoil";
import { CartList } from "../../Recoil/cards";
const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState(CartList);
  return (
    <div className={styles.cart}>
      <div className={styles.cart_orders}>
        <div className={styles.title}>
          <p className={styles.content}>Current Order</p>
          <img src={settings} />
        </div>
        <div className={styles.cartlist}>
          {cartItems.map((item, index) => (
            <CartCards key={index} id={item.id} name={item.name} image={item.image} price={item.price} itemnos={item.itemnos}/>
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.price_detail1}>
          <p>Sub total</p>
          <p>$ 37.61</p>
        </div>
        <div className={styles.price_detail1}>
          <p>discount Sales</p>
          <p>- $ 5.00</p>
        </div>
        <div className={styles.price_detail1}>
          <p>Total Sales after Tax</p>
          <p>$ 2.25</p>
        </div>
        <hr/>
        <div className={styles.price_detail1}>
          <p className={styles.price}>Total</p>
          <p className={styles.price}>$ 34.86</p>
        </div>
      </div>
    </div>
  );
};
export default Cart;
