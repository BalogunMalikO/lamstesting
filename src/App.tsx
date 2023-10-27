import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg'
import "./App.css";
import UploadList from './components/Uploads/UploadList';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
        <Router>
          <main>
            <AppHeader />
            <section className='container'>
              <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/list' element={<UploadList />}></Route>
              </Routes>
            </section>
          </main>
        </Router>
  );
}


function AppHeader(){

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="" />
          Pluritongues LAMS
        </a>
      </nav>
    </header>
  );

}

export default App;
