import React from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/login"} exact component={Login} />
        <Route path={"/register"} exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
