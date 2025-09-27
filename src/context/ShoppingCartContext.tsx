import {createContext, ReactNode, useContext, useState} from "react";
import StoreItems from '../data/items.json';
import {Cart} from "../components/Cart.tsx";
import {SearchComponent} from "../components/SearchComponent.tsx";


type ShoppingCartContextType = {
    searchText: string;
    setSearchText: (text:string) => void;
    filteredItems: StoreItem[];
    setFilteredItems: (items: StoreItem[]) => void;

    cartItems: CartItem[];
    quantityCartItems: number;
    oneItemQuantity: (id: number) => number;
    removeItem: (id: number) => void;
    increaseItems:(id: number, name: string, price: number) => void;
    decreaseItems:(id : number) => void;
    isCartOpen: () => void;
    isCartClosed: () => void;
    isSearchOpen: () => void;
    isSearchClosed: () => void;
    showInputSearch: boolean;


}

type ShoppingCartProviderProps = {
    children: ReactNode;
};



type StoreItem = {
    id: number;
    name: string;

}


type CartItem = { // how much storeItem items added here
    id: number;
    quantity: number;
    name: string;
    price: number;
}


const ShoppingCartContext = createContext({} as ShoppingCartContextType);



export function useShoppingCart (){
    return useContext(ShoppingCartContext);

}


export function ShoppingCartProvider ({children}: ShoppingCartProviderProps){
    //states

    const [searchText, setSearchText ] = useState<string>('')

    const [filteredItems, setFilteredItems] = useState<StoreItem[]>(StoreItems);

    const [cartItems, setCartItems] = useState<CartItem[]>([]);


    //quantity of items in cart total
    const quantityCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
)

    //functions:

    //function for getting total quantity for one item in the card

    function oneItemQuantity(id: number){
    return cartItems.find(item => item.id === id)?.quantity || 0;
}

    //function for +
function increaseItems(id: number, name: string, price: number){
setCartItems((currentItems) => {
    //new item added to cart first time
    if(currentItems.find(item => item.id === id) == null){
        return [...currentItems, {id, name, price, quantity: 1}];
    }else{
     return currentItems.map(item => {
         if(item.id === id){
             return {...item, quantity: item.quantity + 1}
         }else{
             return item;
         }
     })
    }
})
}



    //function for -

  function decreaseItems (id: number){
        setCartItems((currentItems) => {
            if(currentItems.find(item => item.id === id)?.quantity === 1){
                return currentItems.filter(item => item.id !== id);
            } else {
                return currentItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                })
            }
        })
  }





    //function for Remove button
    function removeItem(id: number){
        setCartItems((currentItems) => currentItems.filter(item => item.id !== id))
    }

    //Cart

    const [showCart, setShowCart] = useState(false);

    const isCartOpen = () => setShowCart(true);
    const isCartClosed = () => setShowCart(false);


    //Navigation Search

    const [showInputSearch, setShowInputSearch] = useState(false);

    const isSearchOpen = () => setShowInputSearch(true);
    const isSearchClosed = () => setShowInputSearch(false);

    return (
        <ShoppingCartContext.Provider
            value={{
                searchText,
                setSearchText,
                filteredItems,
                setFilteredItems,
                cartItems,
                quantityCartItems,
                oneItemQuantity,
                increaseItems,
                decreaseItems,
                removeItem,
                isCartOpen,
                isCartClosed,

                showInputSearch,
                isSearchOpen,
                isSearchClosed



        }}>
            {children}

            <Cart  showCart={showCart}/>
            <SearchComponent
                showInputSearch={showInputSearch}
                isSearchOpen={isSearchOpen}
                isSearchClosed={isSearchClosed}
            />
        </ShoppingCartContext.Provider>
    )
}



