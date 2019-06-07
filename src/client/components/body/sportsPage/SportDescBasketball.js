import React, { Component } from 'react';
import SportDesc from './SportDesc.js';

class SportDescBasketball extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <SportDesc
                    sportname="Basketball"
                    loc="Venue: Suurhalli, Lahti Sports Center"
                    time="Competition dates: Friday-Sunday"
                    org="Organized in co-operation with: Lahti Basketball Junior www.lbj.fi"
                    />
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportDescBasketball;