import React, { PureComponent } from 'react';
import Iframe from 'react-iframe'
import ContactBoxComponents from '../about/ContactInformation'

class MapComponents extends PureComponent {
    state = {}
    render() {

        return (
            <div className="map">
                <p id="pagelocation"><a href="/">Home</a> > Map</p>
                
                <Iframe id="google-map"
                    url="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15482.75567433232!2d25.644469483525697!3d60.98288730766387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x468e2830d56a7693%3A0x400b551554bb4d0!2sLahti!3m2!1d60.9826749!2d25.6612096!5e0!3m2!1sen!2sfi!4v1552058068132"
                    width="600" height="450" frameborder="0" style="border:0" margin-bottom="500px" allowfullscreen />
                <div id="map">
                <ContactBoxComponents/>
                </div>
            </div>
        );

    }
}

export default MapComponents;