import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescJudo extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Football(mini-football)"
                    loc="Venue: TBA"
                    time="Competition dates: Friday-Sunday "
                    org="Organized in co-operation with: TBA"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescJudo ;