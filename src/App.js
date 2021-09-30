import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import MakeApt from './pages/MakeApt';
import FindApt from './pages/FindApt';
import ConfirmApt from './pages/ConfirmApt';
import Update from './pages/Update';

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
        <Route component={FindApt} path="/findapt">
          <FindApt />
        </Route>
        {/* <Route component={ConfirmApt} path="/confirmapt">
          <ConfirmApt />
        </Route> */}
        <Route
          path="/confirmapt"
          render={(props) => <ConfirmApt {...props} />}
        />
        <Route path="/update" render={(props) => <Update {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
