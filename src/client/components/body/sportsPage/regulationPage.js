import React, { Component } from 'react';
import Blocks from './Blocks.js';
import Tag from './Tag.js';
import Button from './Button.js';
import {Link} from 'react-router-dom';
import GeneralRegulation from './generalRules.js';
class RegulationPage extends Component {
    
    
    render (){
    
        return(

            <div className="container">
    
                    <GeneralRegulation/>
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default RegulationPage;