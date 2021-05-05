import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Admin from "./Pages/Admin";
// reducs 
import {Provider} from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/admin">
              <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
