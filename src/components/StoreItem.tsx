import {Button, Card} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";

type Props = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl} : Props) {

    const {oneItemQuantity, increaseItems, decreaseItems, removeItem} = useShoppingCart();


    const quantity = oneItemQuantity(id);

    return (
        <Card style={{ width: '18rem' }} key={id} className="mb-4 mt-4">

            <Card.Img variant="top" src={imgUrl} />

            <Card.Body className="  d-flex flex-column">
                <Card.Title className="d-flex justify-content-around align-items-center">
                    <span>{name}</span>
                    <span>{price}</span>
                </Card.Title>

                <div>

                    {quantity === 0 ? (<Button variant="outline-secondary" onClick={()=> increaseItems(id, name, price)}>Add</Button>) :
                        (
                            <div className="d-flex flex-column align-items-center" >
                                <div className="d-flex flex-row align-items-center gap-2">
                                    <Button variant="outline-secondary" onClick={()=> decreaseItems(id)}>-</Button>
                                    <div>
                                        <span>{quantity}</span>
                                    </div>
                                    <Button variant="outline-secondary" onClick={()=> increaseItems(id, name, price)}>+</Button>
                                </div>
                                <Button variant="danger" className="mt-3" onClick={()=>removeItem(id)}>Remove</Button>
                            </div>
                        )}

                </div>


            </Card.Body>
        </Card>
    )
}


