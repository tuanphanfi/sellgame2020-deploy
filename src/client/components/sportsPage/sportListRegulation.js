import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MapComponents from '../body/about/ContactInformation.jsx';

class SportListPage extends Component {
    
    
    render (){
    
        return(

            <div className="sport-list-wrapper">
    
                    <h2 className="name-rule">Sport Regulations</h2>
                
                    <div className="sport-list-container">

                    <ul class="sport-list-flex-container">
                        <li class="flex-item">Athletics</li>
                        <li class="flex-item">Weightlifting</li>
                        <li class="flex-item">Crossfit</li>
                        <li class="flex-item">Wrestling</li>
                    </ul>

                    <ul class="sport-list-flex-container">
                        <li class="flex-item">Volleyball</li>
                        <li class="flex-item">Floorball</li>
                        <li class="flex-item">Ski Jumping</li>
                        <li class="flex-item">Orienteering</li>
                    </ul>

                    <ul class="sport-list-flex-container">
                        <li class="flex-item">Football</li>
                        <li class="flex-item">Judo</li>
                        <li class="flex-item">Kettle Sport</li>
                        <li class="flex-item">Basketball</li>
                    </ul>

                    <ul class="sport-list-flex-container">
                        <li class="flex-item">Disc Golf</li>
                        <li class="flex-item">Esport</li>
                        <li class="flex-item">Molkky</li>
                      
                      
                    </ul>
                    </div>
                                    
                    
                
                    <MapComponents/>
            </div>
          
          
        );
    }
}

export default SportListPage;