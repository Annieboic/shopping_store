import {Navigation} from "./components/Navigation.tsx";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home.tsx";
import {Store} from "./pages/Store.tsx";
import {Blog} from "./pages/Blog.tsx";
import {Contacts} from "./pages/Contacts.tsx";
import {ClickedItem} from "./components/ClickedItem";


function App() {


  return (
    <>

     <Navigation />

        <Container>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/store" element={<Store />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="product/:id" element={<ClickedItem />}/>
            </Routes>
        </Container>


    </>
  )
}

export default App
