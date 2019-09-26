import React, { Component } from 'react';
import Header from './components/Home/Header/Header';
import LoginForm from './components/Home/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Slider from './components/Home/Slider/Slider';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app_home w-100">

          <Header />
     
          {this.contentMenu(routes)}

        </div>

       

      </Router>

    );
  }
  contentMenu = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;