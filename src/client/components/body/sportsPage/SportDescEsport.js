import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescEsport extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Esport"
                    loc="Venue: LAMK campus, Mukkulankatu 19"
                    time="Competition dates: Friday-Sunday "
                    org="Organized in co-operation with: : www.trailblazers.gg"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescEsport;