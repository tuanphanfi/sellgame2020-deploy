import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescWrest extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Wrestling"
                    loc="Venue: Kamppailuareena, Lahti Sports Center"
                    time="Competition dates: Saturday"
                    org="Organized in co-operation with: sports club Lahden Ahkera www.lahdenahkera.fi"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescWrest;