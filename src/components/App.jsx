import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Landing from './Landing/Landing';
import Login from './containers/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Parties from './containers/Parties';
import Register from './containers/Register';
import CreateOffice from './containers/CreateOffice';
import Candidates from './containers/Candidates';
import CreateParty from './containers/CreateParty';

const App = () => (
  <React.Fragment>
    <div className="main">
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/parties" component={Parties} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/create-office" component={CreateOffice} />
        <Route exact path="/candidates" component={Candidates} />
        <Route exact path="/create-party" component={CreateParty} />
      </Switch>
      <Footer />
    </div>
  </React.Fragment>
);

export default App;
