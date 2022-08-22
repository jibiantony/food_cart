import styles from "./CartCards.module.scss";
import { CartList } from "../../Recoil/cards";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types"

const CartCards = (props) => {
  const { id, image, name, price, itemnos } = props;
  const [cartlist, setCartList] = useRecoilState(CartList);

  const index = cartlist.findIndex((item) => item.id === id);

  const increasequantity = () => {
    setCartList([
      ...cartlist.slice(0, index),
      { ...cartlist[index], itemnos: itemnos + 1 },
      ...cartlist.slice(index + 1),
    ]);
  };

  const decreasequantity = () => {
    if (itemnos === 1) {
      const cartlistcopy = [...cartlist];
      cartlistcopy.splice(index, 1);
      setCartList(cartlistcopy);
    } else {
      setCartList([
        ...cartlist.slice(0, index),
        { ...cartlist[index], itemnos: itemnos - 1 },
        ...cartlist.slice(index + 1),
      ]);
    }
  };
  return (
    <div className={styles.cards}>
      <div className={styles.imgdiv}>
        <img src={image} alt="food_image.png" />
      </div>
      <div className={styles.cartitem}>
        <div className={styles.name}>
          <p> {name}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.price}>$ {price}</div>
          <div className={styles.amnt}>
            <button onClick={increasequantity}> + </button>
            {itemnos}
            <button onClick={decreasequantity}> - </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CartCards.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  itemnos: PropTypes.number,
};
export default CartCards;
