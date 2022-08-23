import {React} from 'react';
import styles from "./SearchBar.module.scss";
import searchicon from "../../images/searchicon.svg";
import PropTypes from "prop-types";
const SearchBar = (props) => {
  const { search, setSearch } = props;
  return (
    <div className={styles.searchbar}>
      <img src={searchicon} />
      <input
        type="text"
        placeholder="Search for Product......."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
};
SearchBar.defaultProps={
    search: "",
    setSearch: ()=>{}
}
export default SearchBar;
