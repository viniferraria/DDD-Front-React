import './App.css';
import React from 'react';
import MyTable from './Views/Table/Table';
import Create from './Views/Create/Create'
import Counter from './Views/Counter/Counter';
import Details from  './Views/Details/details';
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
    // const url = 'https://localhost:44318/file'
  // let data = fetch(url)
  // .then(res => res.json())
  // .then(json => alert(json))

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
          <Route path={"/add"} component={Create} />
          <Route path="/" component={MyTable} />
        </Switch>
      </div>
    </Router>
  );
}


// omponentWillMount(){
//   fetch('/getcurrencylist',
//   {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept':'application/json'
//       },
//       method: "get",
//       dataType: 'json',
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     var currencyList = [];
//     for(var i=0; i< data.length; i++){
//       var currency = data[i];
//       currencyList.push(currency);
//     }
//     console.log(currencyList);
//     this.setState({currencyList})
//     console.log(this.state.currencyList);
//   })
//   .catch(err => console.log(err))
// }