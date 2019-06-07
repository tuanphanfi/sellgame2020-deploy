import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescMollky extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Mölkky"
                    loc="Venue: Kisapuisto Sports Park"
                    time="Competition dates: Saturday "
                    org="Organized in co-operation with: : TBA"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescMollky;