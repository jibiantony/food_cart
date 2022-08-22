import { useRecoilState } from "recoil";
import styles from "./CategoryList.module.scss";
import { categoryFilterListState } from "../../Recoil/cards";
import PropTypes from "prop-types";
const CategoryList = (props) => {
  const { image, name } = props;
  const [categorySelector, setCategorySelector] = useRecoilState(
    categoryFilterListState
  );
  return (
    <div
      className={categorySelector !== name ? styles.tags : styles.selected}
      onClick={() => {
        setCategorySelector(name);
      }}
    >
      <span>
        {" "}
        <img src={image} className={styles.image} />{" "}
      </span>{" "}
      &nbsp;
      <span> {name}</span>
    </div>
  );
};
CategoryList.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
CategoryList.defaultProps={
  image: "",
  name: ""
}
export default CategoryList;
