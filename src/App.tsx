import React from 'react';
import logo from './logo.svg'
import "./App.css";
import UploadList from './components/Uploads/UploadList';


function App() {
  return (
    <main>
      <AppHeader />
      <section className='container'>
        <UploadList />
      </section>
    </main>

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
