import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter basename="/react-router-navigation">
      <Header title="Navigation in react" />
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
