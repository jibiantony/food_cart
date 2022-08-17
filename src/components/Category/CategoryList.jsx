import { useRecoilState } from "recoil";
import styles from "./CategoryList.module.scss"
import { categoryFilterListState } from "../../Recoil/cards";
const CategoryList = ({image, name}) => {
  const [catgeorySelector, setCategorySelector]=useRecoilState(categoryFilterListState )
  return (
    <div className={styles.tags} onClick={()=>{setCategorySelector(name)}}>
      <span> <img src={image} className={styles.image}/> </span> &nbsp;
      <span> {name}</span>
    </div>
  );
};
export default CategoryList;
