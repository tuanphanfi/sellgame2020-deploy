import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescCross extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Cross Training"
                    loc="Venue: TBA"
                    time="Competition dates: Saturday"
                    org="Organized in co-operation with: TBA"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescCross ;