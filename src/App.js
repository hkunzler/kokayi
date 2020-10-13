import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/header/nav/Nav.js";
import Home from "./components/home/Home.js";
import Bio from "./components/bio/Bio.js";
import Videos from "./components/videos/Videos.js";
import News from "./components/news/News.js";
import Articles from "./components/articles/Articles.js";
import Products from "./components/products/Products.js";

const App = () => (
  <div>
    <Router>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
