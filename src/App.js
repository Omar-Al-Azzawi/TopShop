import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/nav/Nav";
import Cart from "./components/cart-component/Cart";
import Item from "./components/item/Item";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Cart />
            <HomeScreen />
          </Route>
          <Route exact path="/products/:id">
            <Item />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
