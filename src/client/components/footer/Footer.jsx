import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class Footer extends PureComponent {
    state = {  }
    render() { 
        return (
            <Router>
                <div>
                    <div className="footer1">
                        
                        <span className="footer1-child-div">
                            <h3>CONTACT </h3>

                            <div className="footerDetail"> 
                                Email: sellgames2020lahti@gmail.com
                                <br/>
                                Phone: +358 1919 199
                            </div>
                        </span>
                        <span className="footer1-child-div">
                            <h3 >MEDIA</h3>
                            {/* <a className="photoLibrary" href="#">
                                PHOTOS
                            </a> */}
                            <div className="photoLibrary"><Link to = "/photos">photos</Link></div>
                            
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
            </Router>
          );
    }
}
 
export default Footer;