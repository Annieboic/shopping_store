import storeItems from '../data/items.json';
import {Stack} from "react-bootstrap";


type CartItemProps = {
    id: number
    quantity: number
}


export function CartItem({id, quantity}: CartItemProps) {

    const item = storeItems.find(item => item.id === id);
    if(!item) return null;


return (
      <>
          <Stack direction="horizontal" gap={3}>

              <img src={item.imgUrl} style={{ width: 100, height: 60}} alt=""/>
              <div className="p-2">
                  {item.name}{" "}
                  {quantity > 1 && (
                      <small>x{" "}{quantity}</small>
                  )}
                  <div style={{fontSize: ".8rem"}}>{item.price}</div>
              </div>

              <div>{item.price * quantity}</div>


          </Stack>




      </>
    )
}
