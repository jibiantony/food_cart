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
const categoryFilterListState = atom({
  key: "FilterByCaterory",
  default: "Signature",
});
const filteredCategoryListState = selector({
  key: "FilteredCategoryList",
  get: ({ get }) => {
    const filter = get(categoryFilterListState);
    const list = get(CardsList);

    return list.filter((item) => item.type===filter);
  },
});
export { CardsList, CartList };
