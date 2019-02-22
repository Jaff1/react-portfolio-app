import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Portfolio from './Components/Portfolio'
import Technology from './Components/Technology'
import Intrests from './Components/Intrests'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import Navigation from './Components/Navigation'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/technology' component={Technology} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/intrests' component={Intrests} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
