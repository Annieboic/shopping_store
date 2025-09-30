import {Offcanvas} from "react-bootstrap";
import {Store} from "../pages/Store.tsx";

type SearchComponentProps = {
    showInputSearch: boolean;
    isSearchClosed: () => void;
}

export function SearchComponent({showInputSearch, isSearchClosed} : SearchComponentProps){
    return(
        <>


            <Offcanvas show={showInputSearch} onHide={isSearchClosed} placement="end" style={{width: '50%'}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search Input</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Store
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}