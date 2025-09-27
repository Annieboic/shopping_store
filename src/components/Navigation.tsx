
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle
} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import { FaCartShopping } from "react-icons/fa6";






export function Navigation(){
    const {isCartOpen,quantityCartItems, isSearchOpen, showInputSearch, searchText, setSearchText} = useShoppingCart();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        if(!showInputSearch){
            isSearchOpen()
        }
    }


    return(
        <Navbar expand="lg" sticky="top" className="bg-body-tertiary mb-3 vw-100" >
            <Container>
            <NavbarBrand href="/">
                <img src="/public/img/downloadd.jpeg" alt="logo" style={{ width: "90px", height: "50px", objectFit: "cover" }}  className="rounded-circle" />
            </NavbarBrand>


                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/contacts" as={NavLink}>Contacts</Nav.Link>
                    <Nav.Link to="/blog" as={NavLink}>Blog</Nav.Link>

                </Nav>

<div>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search for an item"
                            value={searchText}
                            onChange={handleSearch}
                            className="me-2"

                        />
                        <Button variant="outline-secondary" onClick={isSearchOpen} className="me-4">
                            Search
                        </Button>
                    </Form>
</div>


                        <Button variant="dark" className="me-4 mt-3 mb-3" onClick={isCartOpen}>
                            <FaCartShopping />
                            {quantityCartItems}
                        </Button>



                </NavbarCollapse>

            </Container>






        </Navbar>
    )
}