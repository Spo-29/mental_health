
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import AuthorProfile from "./pages/AuthorProfile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/author/:authorId" element={<AuthorProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
