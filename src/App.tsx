import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import UploadList from "./components/Uploads/UploadList";
import Dashboard from "./components/dashboard/Dashboard";
import UploadAsset from "./components/UploadAsset/UploadAsset";
// import Login from './components/auth/Login';
import Login from "./components/auth/Login";
import exit from "./exit.png";
import path from "path";
import { link } from "fs/promises";

function App() {
  return (
    <Router>
      <main>
        <AppHeader />
        <section className="container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/list" element={<UploadList />}></Route>
            <Route path="/upload" element={<UploadAsset />}></Route>
          </Routes>
        </section>
      </main>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

function AppHeader() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt=""
          />

          <label className="py-3">Pluritongues LAMS </label>
        </a>
      </nav>
    </header>
  );
}

export default App;
