import React, { PureComponent } from 'react';

class SingleSportResults extends PureComponent {
    state = {        
    };

    // // Open modal page
    // OpenModal = ()=>{
    //     // this.forceUpdate();
    //     console.log("Hello from inside OpenModal method");

    //     var modal = document.getElementById("mod1");
    //     modal.style.display = "block";
    // }
    

    //Close the modal page
    CloseModalByButton = ()=>{        
        console.log("Close the modal page by button");  

        var modal = document.getElementsByClassName("MyModal")[0];    
        modal.style.display = "none";
    }    

    render() {
        return (       
        <div className="MyModal">
            <div className="modal-box">
                <div className="modalBanner">
                    <strong>Result Info</strong>
                    <button className="close-button" onClick={this.CloseModalByButton}><strong>X</strong></button>
                </div>
                <div className="modalContent"> 
                    <h1><strong></strong></h1>                                   
                </div>
            </div>
        </div>
        );
    }
}

export default SingleSportResults;