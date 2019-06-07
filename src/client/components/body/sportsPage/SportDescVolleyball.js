import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescVolleyball extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Volleyball"
                    loc="Venue: TBA"
                    time="Competition dates: Friday-Sunday"
                    org="Organized in co-operation with: "
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescVolleyball;