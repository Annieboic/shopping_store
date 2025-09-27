import {Navigation} from "./components/Navigation.tsx";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router";
import {Home} from "./pages/Home.tsx";
import {Store} from "./pages/Store.tsx";
import {Blog} from "./pages/Blog.tsx";
import {Contacts} from "./pages/Contacts.tsx";

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
            </Routes>
        </Container>


    </>
  )
}

export default App
