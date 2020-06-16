import React from 'react';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './components/routes';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
        </div>
        <Route component={Routes} />
      </Router>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
