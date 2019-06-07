import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescSki extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Ski Jumping"
                    loc="Venue: Lahti Sports Center"
                    time="Competition dates: Saturday "
                    org="Organized in co-operation with: TBA"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescSki ;