/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import PropTypes from 'prop-types';
import { useRecoilState } from "recoil";
import styles from "./ModalComponent.module.scss";
import cartimage from "../../images/cart.svg";
import { CartList } from "../../Recoil/cards";
import closebutton from "../../images/closebutton.svg"

function ModalComponent(props) {
  const {productData,onClose} = props;
  const [cartlist, setCartList] = useRecoilState(CartList);

  
  const addToCart = () => {
    const index = cartlist.findIndex((item) => item.id === productData.id);
    if (index === -1) {
      setCartList([
        ...cartlist,
        {
          id: productData.id,
          name: productData.name,
          image: productData.image,
          price: productData.price,
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
    <div>
      <div id="myModal" className={styles.modal} >
        <img src={closebutton} className={styles.close} onClick={onClose}/>
        <div className={styles.card_field}>
          <div className={styles.card_image}>
            <div className={styles.cartimage} onClick={addToCart}>
              <img src={cartimage} alt="Cart_image.png" />
            </div>
            <img src={productData.image} alt="food_image.png" />
          </div>
          <div className={styles.details_div}>
            <div className={styles.details}>
              <p className={styles.name}> {productData.name}</p>
              <p className={styles.description}> {productData.description}</p>
            </div>
            <div className={styles.price}>
              <p>
                <span className={styles.price_text}> $ {productData.price} </span>
                <span className={styles.quantity}> /</span>
                <span className={styles.quantity}> {productData.quantity} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ModalComponent.propTypes = {
  productData: PropTypes.object,
  onClose:PropTypes.func
}
ModalComponent.defaultProps={
  productData: {}
}
export default ModalComponent;
