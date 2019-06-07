import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescDisc extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Disc Golf"
                    loc="Venue: Mukkula DiscGolfPark"
                    time="Competition dates: Saturday "
                    org="Organized in co-operation with: Lahden Frisbee Club www.lahdenfrisbeeclub.fi "
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescDisc;