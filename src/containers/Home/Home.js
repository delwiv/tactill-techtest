import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
import { Post } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>
            <p><a className={styles.github} href="https://github.com/delwiv/tactill-techtest"
               target="_blank">
              <i className="fa fa-github"/> View on Github
            </a></p>
            <p>
              <a className={styles.github} href="https://github.com/erikras/react-redux-universal-hot-example"
                 target="_blank">
                <i className="fa fa-github"/> View seed on Github
              </a>
            </p>
          </div>
        </div>

        <div className="container">
            <Post post={{
                title: 'Discours sur l\'inégalité entre les hommes',
                body: 'pretty long story, bro',
                author: {
                    name: 'Jean Jaques Rousseau'
                }
            }} />
        </div>
      </div>
    );
  }
}
