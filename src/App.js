import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Launch from "./components/Launch";
import LaunchIndex from "./components/LaunchIndex";
import LaunchShoe from "./components/LaunchShoe";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link> <Link to="/launch">Launch</Link>
      </nav> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
