import React, { Component } from 'react';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'

import './App.css';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {

    if (this.props.error) {
      Alert.error(`<h4>Qui va il messaggio di errore</h4>`, {
        position: 'top',
        html: true,
        effect: 'stackslide',
        beep: false,
        timeout: 4000,
        offset: 50
      });
    }


    return (
      <div className="App">
        <AppRouter />
        <Alert stack={{ limit: 3 }} />
      </div>
    );
  }
}

export default App;
