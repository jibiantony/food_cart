import React, {useState} from "react"
import Cards from "../../components/Cards/Cards"
import styles from "./OrderList.module.scss"
import { filteredCategoryListState} from "../../Recoil/cards"
import { useRecoilValue } from "recoil"
import ModalComponent from "../../components/modal/ModalComponent"


const OrderList=()=> {
    const [modalContent, setModalContent] =useState(null);
    // const list=useRecoilValue(CardsList)
   const catgeorySelector= useRecoilValue(filteredCategoryListState);

    return(
        <>
        <div className={styles.main}>
            {catgeorySelector.map((item,index)=>(<Cards key={index} name={item.name} id={item.id} description={item.description} quantity={item.quantity} price={item.price} image={item.image} setModalContent={setModalContent}/>))}
        </div>
        {modalContent && (<ModalComponent productData={modalContent} onClose={()=> {setModalContent(false)}}/>)}
        </>
    )
}
export default OrderList