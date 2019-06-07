import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "../body/mainPage/MainPage";
import AdminSignIn from "../body/users/AdminSignIn";
import News from "../body/News/News.jsx";
import Schedule from "../body/SchedulePage/Schedule.jsx";
import Results from "../body/ResultsPage/ResultsPage";
import Gallery from "../body/gallery/Gallery.jsx";
import MapComponents from "../body/map/MapComponents.jsx";
import SportPage from "../sportsPage/index.js";
import About from "../body/about/about.jsx";

class Body extends PureComponent {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <MainPage />} />
            <Route exact path="/news" component={News} />
            <Route exact path="/sport" component={SportPage} />

            <Route path="/schedule" component={Schedule} />
            <Route path="/results" component={Results} />
            <Route path="/photos" component={Gallery} />
            <Route path="/map" component={MapComponents} />
            <Route path="/about" component={About} />

            <Route path="/admin" component={AdminSignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Body;
