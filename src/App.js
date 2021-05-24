import React from "react";
import Header from "./compoenents/Header/Header";
import Home from "./compoenents/Home/Home";
import Footer from "./compoenents/Footer/Footer";
import SearchPage from "./compoenents/SeacrhPage/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  //I am using BEN naming conversion
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
      {/* Header */}
      {/* Banner */}
      {/* Search */}
      {/* Card */}
      {/* Footer */}
      {/* Search Page */}
      {/* ..... */}
    </div>
  );
};

export default App;
