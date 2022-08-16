import Cards from "../../components/Cards/Cards"
import styles from "./OrderList.module.scss"
import MenuList from "../../service/MenuList"
import CategoryList from "../../service/Category"
import {CardsList} from "../../Recoil/cards"
import { useRecoilValue } from "recoil"


const OrderList=()=> {
    const list=useRecoilValue(CardsList)
    return(
        <div className={styles.main}>
            {list.map((item,index)=>(<Cards key={index} name={item.name} id={item.id} description={item.description} quantity={item.quantity} price={item.price} image={item.image}/>))}
        </div>
    )
}
export default OrderList