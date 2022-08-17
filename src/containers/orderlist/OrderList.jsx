import Cards from "../../components/Cards/Cards"
import styles from "./OrderList.module.scss"
import MenuList from "../../service/MenuList"
import CategoryList from "../../service/Category"
import {CardsList, filteredCategoryListState} from "../../Recoil/cards"
import { useRecoilState, useRecoilValue } from "recoil"
import{categoryFilterListState} from "../../Recoil/cards"


const OrderList=()=> {
    const list=useRecoilValue(CardsList)
   const catgeorySelector= useRecoilValue(filteredCategoryListState);

    return(
        <div className={styles.main}>
            {catgeorySelector.map((item,index)=>(<Cards key={index} name={item.name} id={item.id} description={item.description} quantity={item.quantity} price={item.price} image={item.image}/>))}
        </div>
    )
}
export default OrderList