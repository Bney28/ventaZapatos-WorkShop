import { Nav } from "./components/nv";
import AppiCard from "./components/Cards";
import "./sass/_gallery-modal.scss"
import "./sass/_modal-cart.scss"
import "./sass/_modal-navbar.scss"
import "./sass/_variables.scss"
import "./sass/_mixins.scss"
import "./sass/cards.sass"
import "./sass/nav.sass"
import "./sass/popOverCarrito.scss"



function App() {
  return (
    <>
    <Nav/>
     <AppiCard/>
    </>
    
  );
}

export default App;
