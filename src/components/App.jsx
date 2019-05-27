import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Landing from './Landing/Landing';
import Login from './containers/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Parties from './containers/Parties';

const App = () => (
  <React.Fragment>
    <div className="main">
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/parties" component={Parties} />
      </Switch>
      <Footer />
    </div>
  </React.Fragment>
);

export default App;
