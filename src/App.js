import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/MyNavbar';
import Home from './pages/Home';
import MakeApt from './pages/MakeApt';
import FindApt from './pages/FindApt';
import ConfirmApt from './pages/ConfirmApt';
import Update from './pages/Update';
import MakeAptSuccess from './pages/MakeAptSuccess';
import UpdateSuccess from './pages/UpdateSuccess';
import Success from './pages/Success';
import DeleteSuccess from './pages/DeleteSuccess';

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
        <Route
          path="/makeaptsuccess"
          render={(props) => <MakeAptSuccess {...props} />}
        />
        <Route
          path="/updatesuccess"
          render={(props) => <UpdateSuccess {...props} />}
        />
        <Route path="/deletesuccess">
          <DeleteSuccess />
        </Route>
        <Route path="/success" render={(props) => <Success {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
