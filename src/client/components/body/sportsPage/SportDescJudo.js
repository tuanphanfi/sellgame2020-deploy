import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescJudo extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Judo"
                    loc="Venue: TBA"
                    time="Competition dates: Saturday"
                    org="Organized in co-operation with: sports club Lahden Ahkera www.lahdenahkera.fi"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescJudo ;