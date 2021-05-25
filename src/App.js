import React from "react";

import Header from "./compoenents/Header/Header";
import Home from "./compoenents/Home/Home";
import Footer from "./compoenents/Footer/Footer";
import SearchPage from "./compoenents/SeacrhPage/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
