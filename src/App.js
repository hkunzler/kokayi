import React from "react";
import Nav from "./components/header/nav/Nav.js";
import Home from "./components/home/Home.js";
import Bio from "./components/bio/Bio.js";
import Videos from "./components/videos/Videos.js";
import News from "./components/news/News.js";
import Articles from "./components/articles/Articles.js";

const App = () => (
  <div>
    <Home />
    <Nav />
    <Bio />
    <Videos />
    <News />
    <Articles />
  </div>
);

export default App;
