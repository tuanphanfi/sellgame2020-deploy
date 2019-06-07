import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescFloorball extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Floorball"
                    loc="Venue: Suurhalli, Lahti Sports Center"
                    time="Competition dates: Friday-Sunday"
                    org="Organized in co-operation with: sports club Pelican SB www.pelicanssb.fi"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescFloorball;