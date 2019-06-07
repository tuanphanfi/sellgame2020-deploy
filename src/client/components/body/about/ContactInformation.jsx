import React, { PureComponent } from 'react';
import Iframe from 'react-iframe'

class ContactBoxComponents extends PureComponent {
    state = {}
    render() {

        return (
            <div>

                <div className="about-contact-information map-contact">
                    <h1 style={{ marginBottom:'0px', textAlign:'center', fontFamily: "Arial"}}>Do not hesitate to contact us</h1>

                    <div className="map-contact-visitUs">
                        {/* <div className="map-contact-border"> */}
                            <h2 style={{marginBottom:' 20px'}}>Visit us</h2>
                            {/* <div className="map-contact-email-info"> */}
                                {/* <h3>SELL GAME 2020</h3> */}
                                <h4> Lahti University of Applied Sciences</h4>
                
                                <p> www.sellgames2020.fi  </p>
                                <p>sellgames2020@lamk.fi </p>
                                <p>SELL student games 2020/LOC </p>
                                <p>PL 214 </p>
                                <p>15101 Lahti, Finland</p>
                                <a href="#google-map" style={{color:'black', fontWeight: '12px'}}>See on map</a>

                                <h2>Email</h2>
                                <div className="map-contact-email-info">
                                    <p><strong>Marjo Leppä</strong></p>
                                    <p>Secretary General</p>
                                    <p>tel. +358 44 708 1316</p>
                                    <p>marjo.leppa@lamk.fi</p>
                                </div>

                                <div className="map-contact-email-info">
                                    <p><strong>Laura Montonen</strong></p>
                                    <p>Marketing and communication</p>
                                    <p>tel. +358 44 708 0335</p>
                                    <p>laura.montonen@lamk.fi</p>
                                </div>

                        {/* </div> */}
                        

                        {/* </div>    */}
                    </div>     



                    </div>
                </div>
            
        );

    }
}

export default ContactBoxComponents;