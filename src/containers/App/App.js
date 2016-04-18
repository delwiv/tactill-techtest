import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import config from '../../config';

injectTapEventPlugin();

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    // getAll: PropTypes.func,
    init: PropTypes.func,
    space: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  // componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //     if (!this.props.space && nextProps.space) {
  //       this.props.getAll();
  //   }
  // }

  render() {
    const styles = require('./App.scss');
    console.log(this.state);
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
            {/* <input type="button" onClick={this.props.getAll.bind(this, this.state.space)} value="Fetch !"/>*/}
          {this.props.children}
        </div>

        <div className="well text-center">
          You'll find source code <a
          href="https://github.com/delwiv/tactill-techtest"
          target="_blank">on Github</a>
        </div>
      </div>
    );
  }
}
