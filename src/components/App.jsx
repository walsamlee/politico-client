import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Parties from './containers/Parties';

const App = () => (
  <React.Fragment>
    <div className="main">
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
