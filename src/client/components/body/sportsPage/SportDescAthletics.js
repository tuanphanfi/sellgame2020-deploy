import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescAthletics extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Athletics"
                    loc="Venue: Stadium, Lahti Sports Center"
                    time="Competition dates: Saturday-Sunday"
                    org="Organized in co-operation with: sports club Lahden Ahkera www.lahdenahkera.fi"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescAthletics ;