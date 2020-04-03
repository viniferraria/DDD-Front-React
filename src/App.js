import './App.css';
import React from 'react';
import Table from './Views/Table/Table';
import Create from './Views/Create/Create'
import Details from  './Views/Details/details';
import Edit from './Views/Edit/edit';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={`/details/:id`} component={Details} />
          <Route path={`/edit/:id`} component={Edit} />
          <Route path={"/add"} component={Create} />
          <Route path="/" component={Table} />
        </Switch>
      </div>
    </Router>
  );
}