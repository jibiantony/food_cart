import CategoryList from "../../components/Category/CategoryList";
import OrderList from "../orderlist/OrderList";
import styles from "./MainWindow.module.scss";
import Category from "../../service/Category";
import Cart from "../Cart/Cart";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  filteredCategoryListState,
  searchFilterState,
} from "../../Recoil/cards";
import { useState } from "react";
const MainWindow = () => {
  const [search, setSearch] = useRecoilState(searchFilterState);
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div>
        <h1>Welcome, Gorry</h1>
        <p>Discover whatever you need easily !</p>
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
  );
};
export default MainWindow;
