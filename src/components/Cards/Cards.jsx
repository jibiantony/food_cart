import styles from "./Cards.module.scss";
import cartimage from "../../images/cart.svg";
import { useRecoilState } from "recoil";
import { CartList } from "../../Recoil/cards";
import PropTypes from "prop-types";
const Cards = (props) => {
  const { id, name, image, description, price, quantity } = props;
  const [cartlist, setCartList] = useRecoilState(CartList);
  const addToCart = () => {
    const index = cartlist.findIndex((item) => item.id === id);
    if (index === -1) {
      setCartList([
        ...cartlist,
        {
          id: id,
          name: name,
          image: image,
          price: price,
          itemnos: 1,
        },
      ]);
    } else {
      setCartList([
        ...cartlist.slice(0, index),
        { ...cartlist[index], itemnos: cartlist[index].itemnos + 1 },
        ...cartlist.slice(index + 1),
      ]);
    }
  };
  return (
    <div className={styles.card_field}>
      <div className={styles.card_image}>
        <div className={styles.cartimage} onClick={addToCart}>
          <img src={cartimage} alt="Cart_image.png" />
        </div>
        <img src={image} alt="food_image.png" />
      </div>
      <div className={styles.details_div}>
        <div className={styles.details}>
          <p className={styles.name}> {name}</p>
          <p className={styles.description}> {description}</p>
        </div>
        <div className={styles.price}>
          <p>
            <span className={styles.price_text}> $ {price} </span>
            <span className={styles.quantity}> /</span>
            <span className={styles.quantity}> {quantity} </span>
          </p>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.string
};
Cards.defaultProps={
  id: "",
  name: "",
  image: "",
  description: "",
  price: 0,
  quantity: ""
}
export default Cards;
