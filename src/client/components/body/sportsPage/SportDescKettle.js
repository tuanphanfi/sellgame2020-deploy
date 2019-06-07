import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescKettle extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Kettlebell Sport"
                    loc="Venue: Salpausselkä Hall, Lahti Sports Center"
                    time="Competition dates: Sunday"
                    org="Organized in co-operation with: sports club "
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescKettle ;