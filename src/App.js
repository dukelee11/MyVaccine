import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/MyNavbar';
import Home from './pages/Home';
import MakeApt from './pages/MakeApt';
import FindApt from './pages/FindApt';
import ConfirmApt from './pages/ConfirmApt';
import Update from './pages/Update';
import Success from './pages/Success';

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
        {/* https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component */}
        <Route
          path="/confirmapt"
          render={(props) => <ConfirmApt {...props} />}
        />
        <Route path="/update" render={(props) => <Update {...props} />} />
        <Route path="/success" render={(props) => <Success {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
