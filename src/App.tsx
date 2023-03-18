import * as React from 'react';
import './App.css';
import { Router, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from './components/Home.tsx';
import Create from './components/customer/Create.tsx';
import EditCustomer from './components/customer/Edit.tsx';


class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>

            <li>
              <Link to={'/create'}> Create Customer </Link>
            </li>
          </ul>
        </nav>

        <Router>
          <Route path={'/'} exact component={Home} />
          <Route path={'/create'} exact component={Create} />
          <Route path={'/edit/:id'} exact component={EditCustomer} />
        </Router>
      </div>
    );
  }
}

export default withRouter(App);