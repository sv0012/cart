import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Producsts";
import {Provider} from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/cart' component={Cart} exact />
        </Switch>
      </Router>
    </Provider>





  );
}

export default App;
