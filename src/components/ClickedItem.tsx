import {useParams} from "react-router-dom";
import storeItems from "../data/items.json"


export function ClickedItem() {

    const {id} = useParams();

    const clickedItem = storeItems.find(item => item.id === Number(id));



    if(!clickedItem){
        return <p>Item Not Found</p>
    }


    return (

            <div style={{ padding: '2rem' }}>
                <h2>{clickedItem.name}</h2>
                <img src={clickedItem.imgUrl} alt={clickedItem.name} style={{ maxWidth: '400px' }} />
                <p>Price: ${clickedItem.price}</p>
            </div>

    )
}

