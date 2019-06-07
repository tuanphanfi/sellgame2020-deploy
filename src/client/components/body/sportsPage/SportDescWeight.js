import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescWeight extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Weightlifting"
                    loc="Venue: Salpausselkä Hall, Lahti Sports Center"
                    time="Competition dates: Saturday"
                    org="Organized in co-operation with: TBA"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescWeight;