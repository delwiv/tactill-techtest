import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import config from '../../config';
// import { asyncConnect } from 'redux-async-connect';

// @asyncConnect([{
//   promise: ({store: {dispatch, getState}}) => {
//     const promises = [];
//
//     // if (!isInfoLoaded(getState())) {
//     //   promises.push(dispatch(loadInfo()));
//     // }
//     // if (!isAuthLoaded(getState())) {
//     //   promises.push(dispatch(loadAuth()));
//     // }
//
//     return Promise.all(promises);
//   }
// }])
// @connect(
//   state => ({user: state.auth.user}),
//   {logout, pushState: routeActions.push})
injectTapEventPlugin();

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    // user: PropTypes.object,
    // logout: PropTypes.func.isRequired,
    // pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                <div className={styles.brand}/>
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              {/* <LinkContainer to="/about">
                <NavItem eventKey={4}>About Us</NavItem>
              </LinkContainer>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
        {/* <InfoBar/>*/}

        <div className="well text-center">
          You'll find source code <a
          href="https://github.com/delwiv/tactill-techtest"
          target="_blank">on Github</a>
        </div>
      </div>
    );
  }
}
