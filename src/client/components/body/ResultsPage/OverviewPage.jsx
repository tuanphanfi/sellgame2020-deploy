import React, { PureComponent } from "react";
import SingleSportResults from "./SingleSportResults";
import InfoModal from './InfoModal'

class Overview extends PureComponent {

  props = {};
  state = {
    modalIsOpen: false,
    sportName: ["FOOTBALL", "ATHLETICS", "JUDO", "WRESTLING", "WEIGHTLIFTING", "KETTLE SPORT", "CROSS TRAINING", "BASKETBALL", "VOLLEYBALL", "FLOORBALL", "JUMPING", "ORIENTEERING", "GOLF", "MÖLKKY", "ESPORT"],
    chosenSportName: null,
    infoModalIsOpen: false       
  };
            
  handleResultsModalState = (e)=>{    
    this.setState(prevState =>
      {        
        return {
          modalIsOpen: !prevState.modalIsOpen,
          chosenSportName: e
        }        
      }    
    );    
    console.log("handleResultsModalState method, change state of modalIsOpen"); 
  };
  // Open result modal
  getResultsModal = () =>{
    if(this.state.modalIsOpen){
      console.log("getResultsModal method, return the modal or take it away based on modalIsOpen")            
      return( 
        <SingleSportResults 
          parentMethod = {this.handleResultsModalState}  
          chosenSportName = {this.state.chosenSportName}                                   
        />        
      )
    }
    else
      return null;
  }
  
  
  handleInfoModalState = ()=>{    
    this.setState(() =>
      {        
        return {
          infoModalIsOpen: true,          
        }        
      }    
    );    
    console.log("handleInfoModalState method, change state of modalIsOpen"); 
  };
  // Open info modal
  getInfoModal = () =>{
    if(this.state.infoModalIsOpen == false){
      return(
        <InfoModal
            parentMethod = {this.handleInfoModalState}        
        />
      )
    }
    else
      return null;
  }

  
  

  //Close the modal page when click elsewhere modal box
  // CloseModal = () => {
  //   document.addEventListener('keyup', (e) =>{
  //     if (e.keyCode == 27) //'esc' code
  //       this.handleResultsModalState();
  //   })
  //   var modal = document.getElementsByClassName("MyModal")[0];
  //   if (event.target == modal) {
  //     this.handleResultsModalState();
  //     console.log("Close Modal function from click");
  //   }
  // };

  render() {
    return (
      <div id="overview">                              
        {this.getResultsModal()}
        {this.getInfoModal()}

        <div className="results-content">
          {this.state.sportName.map(
            name => (
                <div className="sport-title" onClick={() => this.handleResultsModalState(name)}>
                  <h1>
                    <strong>{name}</strong>
                  </h1>
                </div>
              )
            )                  
          }        
        </div>        
      </div>
    );
  }
}

export default Overview;
