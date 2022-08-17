import styles from "./SearchBar.module.scss";
const SearchBar = ({search,setSearch})=>{
    
    return(
        <div className={styles.searchbar}>
            <input type="text" placeholder="Search for Product......." value={search} onChange={(e)=>{setSearch(e.target.value)}}/> 
        </div>
    )
}
export default SearchBar