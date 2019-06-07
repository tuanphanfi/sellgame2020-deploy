import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescOrien extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Orienteering"
                    loc="Venue: TBA"
                    time="Competition dates: Saturday-Sunday"
                    org="Organized in co-operation with: TBA "
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescOrien;