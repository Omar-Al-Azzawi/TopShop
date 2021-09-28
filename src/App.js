import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Item from "./components/Item";
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
      </div>
    </Router>
  );
}

export default App;
