import './App.css';
import React from 'react';
import { Button } from'reactstrap';
import Table from './Views/Table/Table';
import Create from './Views/Create/Create';
import Edit from './Views/Edit/edit';
import FileComponent from './Views/File/File';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <Button color='primary' tag={Link} to="/"> Home </Button>
        <Button color='primary' tag={Link} to="/add"> Add </Button>
        <Button color='primary' tag={Link} to="/upload"> Bulk </Button>
        <br/>
      </div>
      <div>
        <br/>
        <Switch>
          <Route path={`/edit/:id`} component={Edit} />
          <Route path={"/upload"} component={FileComponent} />
          <Route path={"/add"} component={Create} />
          <Route path="/" component={Table} />
        </Switch>
      </div>
    </Router>
  );
}