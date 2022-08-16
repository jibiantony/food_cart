import styles from "./CategoryList.module.scss"
const CategoryList = ({image, name}) => {
  return (
    <div className={styles.tags}>
      <span> <img src={image} className={styles.image}/> </span> &nbsp;
      <span> {name}</span>
    </div>
  );
};
export default CategoryList;
