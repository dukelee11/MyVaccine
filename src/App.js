import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MakeApt from './pages/MakeApt';
import FindApt from './pages/FindApt';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/makeapt">
          <MakeApt />
        </Route>
        <Route path="/findapt">
          <FindApt />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
