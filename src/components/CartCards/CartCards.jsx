import Category from "../../service/Category";
import cro from "../../images/croissant.jpeg";
import styles from "./CartCards.module.scss";
import { CartList } from "../../Recoil/cards";
import { useRecoilState } from "recoil";

const CartCards = ({ id, image, name, price, itemnos }) => {
  const [cartlist, setCartList] = useRecoilState(CartList);

  const index = cartlist.findIndex((item) => item.id === id);
  
  const increasequantity = () => {
    console.log(index)
    setCartList([
      ...cartlist.slice(0, index),
      { ...cartlist[index], itemnos:itemnos + 1 },
      ...cartlist.slice(index + 1)
    ]);
  };

  const decreasequantity = () => {
      if( itemnos ===1){
        const cartlistcopy = [...cartlist]
        cartlistcopy.splice(index,1)
        setCartList(cartlistcopy);
      }
      else{
        setCartList([
          ...cartlist.slice(0, index),
          { ...cartlist[index], itemnos:itemnos - 1 },
          ...cartlist.slice(index + 1)
        ]);
      }
    
    
  };
  return (
    <div className={styles.cards}>
      <div className={styles.imgdiv}>
        <img src={image} />
      </div>
      <div className={styles.cartitem}>
        <div className={styles.name}>
          <p> {name}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.price}>{price}</div>
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
export default CartCards;
