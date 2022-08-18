import styles from "./SearchBar.module.scss";
import searchicon from "../../images/searchicon.svg";
const SearchBar = ({search,setSearch})=>{
    
    return(
        <div className={styles.searchbar}>
            <img src={searchicon}/>
            <input type="text" placeholder="Search for Product......." value={search} onChange={(e)=>{setSearch(e.target.value)}}/> 
        </div>
    )
}
export default SearchBar