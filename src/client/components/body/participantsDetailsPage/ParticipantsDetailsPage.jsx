import React, { PureComponent } from "react";
import ParticipantsInfoModal from './ParticipantsInfoModal';

class ParticipantsDetailsPage extends PureComponent {

  props = {};
  state = {   
    infoModalIsOpen: false       
  };                
  
  handleInfoModalState = ()=>{    
    this.setState(() =>
      {        
        return {
          infoModalIsOpen: true,          
        }        
      }    
    );    
    console.log("handleInfoModalState method, change state of infoModalIsOpen"); 
  };
  // Open info modal
  getInfoModal = () =>{
    if(this.state.infoModalIsOpen == false){
      return(
        <ParticipantsInfoModal
            parentMethod = {this.handleInfoModalState}        
        />
      )
    }
    else
      return null;
  }   

  render() {
    return (
      <div id="participants-details-component" > 
        <p id="pagelocation"><a href="/">Home</a> > Details</p> 
          {this.getInfoModal()}                            
        
        <div className="component-title">
          {/* <h1>All you need to know about the </h1> */}
        </div>
      </div>
    );
  }
}

export default ParticipantsDetailsPage;