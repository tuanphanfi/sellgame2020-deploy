
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

import MainPage from '../body/mainPage/MainPage'
import AdminSignIn from '../body/users/AdminSignIn'
import News from '../body/News/News.jsx'
import Schedule from "../body/SchedulePage/Schedule.jsx";
// import Schedule from "../body/Schedule.jsx";
import Results from '../body/ResultsPage/ResultsPage'
import Gallery from '../body/gallery/Gallery.jsx'
import MapComponents from '../body/map/MapComponents.jsx'
import SportPage from '../body/sportsPage/index.js'
import About from '../body/about/about.jsx'
import SportDesc from '../body/sportsPage/SportDesc.js'
import SportDescAthletics from '../body/sportsPage/SportDescAthletics.js'
import SportDescJudo from '../body/sportsPage/SportDescJudo.js'
import SportDescWrest from '../body/sportsPage/SportDescWrest.js'
import SportDescWeight from '../body/sportsPage/SportDescWeight.js'
import SportDescKettle from '../body/sportsPage/SportDescKettle.js'
import SportDescCross from '../body/sportsPage/SportDescCross.js'
import SportDescBasketball from '../body/sportsPage/SportDescBasketball.js'
import SportDescVolleyball from '../body/sportsPage/SportDescVolleyball.js'
import SportDescFloorball from '../body/sportsPage/SportDescFloorball.js'
import SportDescFootball from '../body/sportsPage/SportDescFootball.js'
import SportDescSki from '../body/sportsPage/SportDescSki.js'
import SportDescOrien from '../body/sportsPage/SportDescOrien.js'
import SportDescDisc from '../body/sportsPage/SportDescDisc.js'
import SportDescMollky from '../body/sportsPage/SportDescMollky.js'
import SportDescEsport from '../body/sportsPage/SportDescEsport.js'
import ANews from '../body/News/ANews'

import RegulationPage from '../body/sportsPage/regulationPage.js'
import GeneralRegulation from '../body/sportsPage/generalRules.js'
import SportListPage from '../body/sportsPage/sportRegulation.js'

import AdminPage from '../body/AdminPage/AdminPage.jsx'
import EditNews from '../body/AdminPage/EditNews.jsx'
import AwaitingNews from '../body/AdminPage/AwaitingNews.jsx'
import SaveOnly from '../body/AdminPage/EditAwaitingANews'
import EditANews from '../body/AdminPage/EditANews.jsx'

import ParticipantsDetailsPage from '../body/participantsDetailsPage/ParticipantsDetailsPage.jsx'



function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          Cookies.get('authenticated') 
          ? (
            <Component {...props} />
          ) 
          : (
            <Redirect
              to={{
                pathname: "/admin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }


class HeaderFooter extends PureComponent {
    state = {
        showNav: "",
        bodyPosition: "",
        footerPosition: "",
        showScroll: "",
        sportData: [
            
                ['./src/client/img/football.jpg', 'Football','/sports/football'],
                ['https://images.unsplash.com/photo-1536407078615-9fd99f2915c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Athletics','/sports/athletics'],
                ['https://images.unsplash.com/photo-1542937307-6eeb0267cbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Judo','/sports/judo'],
                ['https://images.unsplash.com/photo-1542468019-550cb643a5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',"Wrestling",'/sports/wrestling'],
                ['https://images.unsplash.com/photo-1526403646408-57b94dc15399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',"Weightlifting", '/sports/weightlifting'],
                ['./src/client/img/kettlebells 2.jpg', 'Kettle Sport','/sports/kettle_sport'],
                ['https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80', 'Cross Training','/sports/cross_training'],
                ['./src/client/img/BasketBall.jpg', 'Basketball','/sports/basketball'],
                ['./src/client/img/volleyball.jpg','Volleyball','/sports/volleyball'],
                ['./src/client/img/Floorball.jpg', 'Floorball','/sports/floorball'],
                ['https://images.unsplash.com/photo-1515289867998-8612704d97ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Ski Jumping','/sports/skijumping'],
                ['https://images.unsplash.com/photo-1464898644169-85eb09c329aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80','Orienteering','/sports/orienteering'],
                ['https://images.unsplash.com/photo-1507469964576-83ad33be38d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1699&q=80', 'Disc Golf','/sports/disc_golf'],
                ['./src/client/img/Mölkky.jpg', 'Mölkky','/sports/molkky'],
                ['https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Esport','/sports/esport']
        
        ],
    }

    showNav = () => {
        if (this.state.showNav === 'showNavDropdown') {
            this.setState({
                showNav: '',
                bodyPosition: '',
                footerPosition: ''
            })
        }
        else {
            this.setState({
                showNav: 'showNavDropdown',
                bodyPosition: 'bodyPositionChange',
                footerPosition: 'footerPositionChange'
            })
        }

    }


    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }

    componentDidMount() {

        


        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                this.setState({
                    showScroll: ''
                });

            }
            else {
                this.setState({
                    showScroll: 'scrollUp'
                });

            }
        };
    }

    componentWillUnmount() {
        window.onscroll = null;
    }





    render() {
        return (
            <Router >
                <div>

                    <header >
                    


                        <Link to="/">
                            <img className="logo " src={'../../../../../src/client/img/SELLGAMES_logo.png'} />
                        </Link>





                        <nav>
                            <ul className={this.state.showNav}>
                                <li className="navitem">
                                    <Link to="/news">News</Link>
                                </li>
                                <li className="navitem dropbtn">
                                    <Link to="/sports">Sports<i className="fa fa-caret-down"></i></Link>

                                    <div className="drop-content">
                                        <div className="drop-links">
                                            <Link to="/schedule">Schedule</Link>
                                        </div>
                                        <div className="drop-links sub-dropbtn">
                                            <Link to="/regulation">Regulation</Link>

                                        </div>


                                        <div className="drop-links">
                                            <Link to="/sports">Details</Link>
                                        </div>
                                    </div>




                                </li>
                                <li className="navitem dropbtn">
                                    <Link to="">Participants<i className="fa fa-caret-down"></i></Link>

                                    <div className="drop-content">
                                        <div className="drop-links">
                                            <Link to="" onClick={function(){alert("The enrollment link is going to open during 2020. Stay tune!")}}>Enrollment</Link>
                                        </div>
                                        <div className="drop-links">
                                            <Link to="/participants/details">Details</Link>
                                        </div>
                                    </div>
                                </li>

                                <li className="navitem">
                                    <Link to="/results">Results</Link>
                                </li>
                                <li className="navitem dropbtn">
                                    <Link to="/about">About<i className="fa fa-caret-down"></i></Link>

                                    <div className="drop-content">
                                        <div className="drop-links">
                                            <Link to="/about">SELL GAMES</Link>
                                        </div>
                                        <div className="drop-links " onClick={this.scrollToBottom}>
                                            Contact
                                            </div>
                                        <div className="drop-links" >
                                            <Link to="/map">Map</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <label className="icon" onClick={this.showNav} >
                                <i className="fa fa-bars"></i>
                            </label>

                        </nav>


                    </header>


                    <div  className={this.state.bodyPosition}>
                        <Switch >

                            <Route exact path="/" render={(props) => <MainPage {...props} sportdata={this.state.sportData} />} />
                            <Route exact path="/news" component={News} />
                            <Route exact path="/sports" render={(props) => <SportPage {...props} sportdata={this.state.sportData} />} />

                            <Route exact path="/participants/details" component={ParticipantsDetailsPage} />
                            <Route path="/schedule" component={Schedule} />
                            <Route path="/results" component={Results} />
                            <Route path="/photos" component={Gallery} />
                            <Route path="/map" component={MapComponents} />
                            <Route path="/about" component={About} />

                            {/* <Route path="/AdminPage" component={AdminPage} /> */}
                            <Route path="/admin" component={AdminSignIn} />
                            <Route path="/sports/football" component={SportDescFootball} />
                            <Route path="/sports/athletics" component={SportDescAthletics} />
                            <Route path="/sports/judo" component={SportDescJudo} />
                            <Route path="/sports/wrestling" component={SportDescWrest} />
                            <Route path="/sports/weightlifting" component={SportDescWeight} />
                            <Route path="/sports/kettle_sport" component={SportDescKettle} />
                            <Route path="/sports/cross_training" component={SportDescCross} />
                            <Route path="/sports/basketball" component={SportDescBasketball} />
                            <Route path="/sports/volleyball" component={SportDescVolleyball} />
                            <Route path="/sports/floorball" component={SportDescFloorball} />
                            <Route path="/sports/football" component={SportDescFootball} />
                            <Route path="/sports/skijumping" component={SportDescSki} />
                            <Route path="/sports/orienteering" component={SportDescOrien} />
                            <Route path="/sports/disc_golf" component={SportDescDisc} />
                            <Route path="/sports/molkky" component={SportDescMollky} />
                            <Route path="/sports/esport" component={SportDescEsport} />
                            <Route path="/anews/:newsid" component={ANews} />
                            <Route path="/gallery" component={Gallery} />
                            <Route path="/regulation" component={RegulationPage} />
                            <Route path="/generalrules" component={GeneralRegulation} />
                            <Route path="/sportrules" component={SportListPage} />

                        
                            <PrivateRoute path="/addnews" component={AdminPage} />
                            <PrivateRoute path="/editnews" component={EditNews} />
                            <PrivateRoute path="/editanews/:newsid" component={EditANews} />
                            <PrivateRoute path="/saveonly/:newsid" component={SaveOnly} />

                            <PrivateRoute path="/awaitingnews" component={AwaitingNews} />


                        </Switch>

                    </div>


                    <div className={this.state.showScroll} onClick={this.scrollToTop}>
                        <div className="scroll">
                            <i className="fas fa-angle-up" />
                        </div>
                    </div>

          {/* footer */}
                    <div className={this.state.footerPosition}>
                        <div className="footer1">
                            <span className="footer1-child-div">
                                <h3>CONTACT </h3>

                                <div className="footerDetail">
                                Lahti University of Applied Sciences<br/>
                
                                 www.sellgames2020.fi  <br/> 
                                sellgames2020@lamk.fi  <br/> 
                                SELL student games 2020/LOC  <br/>   
                                PL 214  <br/>
                                15101 Lahti, Finland    
                                </div>
                            </span>
                            <span className="footer1-child-div">
                                <h3>MEDIA</h3>
                                    <Link to = "/photos"><div className="photoLibrary" onClick ={this.scrollToTop}>PHOTOS</div></Link>
                            </span>
                            <span className="footer1-child-div">
                                <h3>SOCIAL MEDIA</h3>
                                <a href="#"className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                
                            </span>
                        </div>


                        <div className="footer2">
                            &copy; SELL GAMES 2020
                        </div>

                    </div>
                </div>
          
      </Router>
    );
    }
}

export default HeaderFooter;


