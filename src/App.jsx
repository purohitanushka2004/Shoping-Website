import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/home";
import Checkout from "./components/Checkout/checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login";
import { auth } from "./firebase";
import { UseStatevalue } from "./components/stateProvider";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/payment/Orders";
import Footer from "./components/Footer/Footer";

const promise = loadStripe(
  "pk_test_51Mpsa8SBM4PvcUomXlrElVTDwqZts2ZPTW1q5K7iND2iUYjx08KmOW6zVnCex8VZMGjhOfsDJpkYrRjYTLHJGmyt003R1rzs4t"
);

const App = () => {
  const [{}, dispatch] = UseStatevalue();

  useEffect(() => {
    //will only run once when the app content loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>>> ", authUser);
      if (authUser) {
        //the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/Login">
            <Login />

          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <Footer/> */}
          </Route>

          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <Footer/> */}
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
