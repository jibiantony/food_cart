import CategoryList from "../../components/Category/CategoryList";
import React from "react";
import OrderList from "../orderlist/OrderList";
import styles from "./MainWindow.module.scss";
import Category from "../../service/Category";
import Cart from "../Cart/Cart";
import SearchBar from "../../components/SearchBar/SearchBar";
import cart_image from "../../images/cart.svg";
import MobileCart from "../mobilCart/MobileCart";
import { useRecoilState } from "recoil";
import { searchFilterState, cart } from "../../Recoil/cards";
const MainWindow = () => {
  const [search, setSearch] = useRecoilState(searchFilterState);
  const [mobileCart, setMobileCart] = useRecoilState(cart);
  return (
    <>
      {mobileCart ? (
        <div className={styles.cartMobile}>
          <MobileCart />
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.content_mobile}>
              <div>
                <p className={styles.h1}>Welcome, Gorry</p>
                <p>Discover whatever you need easily !</p>
              </div>
              <div
                className={styles.content_cartImage}
                onClick={() => {
                  setMobileCart(true);
                }}
              >
                <img src={cart_image} alt="cart_icon.png" />
              </div>
            </div>
            <div className={styles.searchbar}>
              <SearchBar search={search} setSearch={setSearch} />
            </div>
          </div>
          <div className={styles.category}>
            {Category.map((item, index) => (
              <CategoryList key={index} name={item.name} image={item.image} />
            ))}
          </div>
          <div className={styles.OrderList}>
            <OrderList />
          </div>
          <div className={styles.cart}>
            <Cart />
          </div>
        </div>
      )}
    </>
  );
};
export default MainWindow;
