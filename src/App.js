import './App.css';
import React from 'react';
import MyTable from './Views/Table/Table';
import Create from './Views/Create/Create'
import Counter from './Views/Counter/Counter';
import Details from  './Views/Details/details';
import Edit from './Views/Edit/edit';
import SCounter from './Views/SCounter/SCounter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar color='dark' expand='md'>
          <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/state">SCounter</NavLink>
              </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/state" component={SCounter} />
          <Route path="/counter" component={Counter} />
          <Route path={`/:id/details`} component={Details} />
          <Route path={`/edit/:id`} component={Edit} />
          <Route path={"/add"} component={Create} />
          <Route path="/" component={MyTable} />
        </Switch>
      </div>
    </Router>
  );
}