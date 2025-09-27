import {Col, Form, Row} from "react-bootstrap";
import storeItems from "../data/items.json"
import {StoreItem} from "../components/StoreItem.tsx";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {useEffect} from "react";


export function Store(){

    const { searchText,
            setSearchText,
            filteredItems,
            setFilteredItems,} = useShoppingCart();


    useEffect(() => {
   const filteredItemsByInput = storeItems.filter(item =>
   item.name.toLowerCase().includes(searchText.toLowerCase()))

        setFilteredItems(filteredItemsByInput);
    }, [searchText]);

    return (
        <>
        <h1>Store Page</h1>

            <Form>
                <Form.Control
                type="text"
                placeholder="Search for an item"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                />
            </Form>

            <Row>
                {filteredItems.map(item => (
                    <Col>
                        <StoreItem
                            key={item.id}
                            {...item}
                        />
                    </Col>
                ))}
            </Row>


        </>
    )
}