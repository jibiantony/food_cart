import { atom, selector } from "recoil";
import MenuList from "../service/MenuList";

const CardsList = atom({
  key: "CardsList",
  default: MenuList,
});
const CartList = atom({
  key: "CartList",
  default: [],
});

const sumOfQuantity = selector({
key:"TotalSumofQuanity",
get:({get}) =>{
  const price = get(CartList);
  let totalprice =0;
  for (const i of price){
    totalprice+=i.price*i.itemnos;
  };
return totalprice.toFixed(2);
}
});

const categoryFilterListState = atom({
  key: "FilterByCaterory",
  default: "Croissant",
});
const searchFilterState = atom({
  key: "FilterBySearch",
  default: "",
});
const filteredCategoryListState = selector({
  key: "FilteredCategoryList",
  get: ({ get }) => {
    const filter = get(categoryFilterListState);
    const list = get(CardsList);
    const search = get(searchFilterState);
    return list.filter(
      (item) => item.itemcategory === filter && item.name.toLowerCase().includes(search.toLowerCase())
    );
  },
});
export {
  CardsList,
  CartList,
  filteredCategoryListState,
  categoryFilterListState,
  searchFilterState,
  sumOfQuantity
};
