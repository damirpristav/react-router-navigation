import React, { Fragment } from 'react';
import { NavLink, Switch, Route, useRouteMatch, Link } from 'react-router-dom';

const Services = () => {
  const match = useRouteMatch();
  
  return(
    <Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Services</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius recusandae! Possimus non soluta omnis.</p>
      </div>
      <div className="py-3">
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <NavLink className="nav-link" exact to={`${match.url}`}>Service 1</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`${match.url}/service-2`}>Service 2</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`${match.url}/service-3`}>Service 3</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}`} exact>
            <div className="card">
              <div className="card-header">Service 1</div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Route>
          <Route path={`${match.path}/service-2`}>
            <div className="card">
              <div className="card-header">Service 2</div>
              <div className="card-body">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/" className="btn btn-secondary">Go back to homepage</Link>
              </div>
            </div>
          </Route>
          <Route path={`${match.path}/service-3`}>
            <div className="card">
              <div className="card-header">Service 3</div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Services;