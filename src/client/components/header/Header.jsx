import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "../body/mainPage/MainPage";
import AdminSignIn from "../body/users/AdminSignIn";
import News from "../body/News/News.jsx";
import Schedule from "../body/Schedule.jsx";
import Results from "../body/ResultsPage/ResultsPage";
import Gallery from "../body/gallery/Gallery.jsx";
import MapComponents from "../body/map/MapComponents.jsx";
import SportPage from "../sportsPage/index.js";
import About from "../body/about/about.jsx";
import SportDesc from "../sportsPage/SportDesc.js";

class Header extends PureComponent {
  state = {
    showNav: "",
    headerAfter: ""
  };

  showNav = () => {
    if (this.state.showNav === "showNavDropdown") {
      this.setState({
        showNav: "",
        headerAfter: ""
      });
    } else {
      this.setState({
        showNav: "showNavDropdown",
        headerAfter: "after"
      });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to="/">
              <img
                className="logo "
                src={"./src/client/img/SELLGAMES_logo.png"}
              />
            </Link>

            <nav>
              <ul className={this.state.showNav}>
                <li className="navitem">
                  <Link to="/news">News</Link>
                </li>
                <li className="navitem">
                  <Link to="/sports">Sports</Link>
                </li>
                <li className="navitem">
                  <Link to="">Participants</Link>
                </li>
                <li className="navitem">
                  <Link to="/schedule">Schedule</Link>
                </li>
                <li className="navitem">
                  <Link to="">Results</Link>
                </li>
                <li className="navitem">
                  <Link to="/about">About</Link>
                </li>
              </ul>

              <label className="icon" onClick={this.showNav}>
                <i className="fa fa-bars" />
              </label>
            </nav>
          </header>
          <hr />
          <Switch>
            <Route exact path="/news" component={MainPage} />
            <Route exact path="/sports" component={SportPage} />

            <Route path="/schedule" component={Schedule} />
            <Route path="/results" component={Results} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/map" component={MapComponents} />
            <Route path="/about" component={About} />

            <Route path="/Admin" component={AdminSignIn} />
            <Route path="/sports/football" component={SportDesc} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
