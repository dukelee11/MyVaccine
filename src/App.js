import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import MakeApt from './pages/MakeApt';
import FindApt from './pages/FindApt';
import ConfirmApt from './pages/ConfirmApt';

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
        <Route path="/confirmapt">
          <ConfirmApt />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
