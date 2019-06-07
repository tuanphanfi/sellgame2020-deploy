import React, { PureComponent } from 'react';

class SingleSportResults extends PureComponent {
    constructor(props){
        super(props);
    }         
    
    componentDidMount(){
        // document.addEventListener('keyup', (e) => this.CloseModalByEsc(e))
        this.CloseModal();
    }
    // componentWillUnmount(){
    //     document.removeEventListener('keyup', (e) => this.CloseModalByEsc(e))
    // }


    //Close the modal window by different ways
    CloseModal = () => {        
        console.log("inside the CloseModal method of SingleSportResult")        

        document.addEventListener('keyup', (e) =>{
            if (e.keyCode == 27 && document.getElementsByClassName("MyModal")[0] != null) { //'esc' code                
                    this.props.parentMethod();                                                               
                    console.log("Close Modal function from esc key");                                        
                }
            }
        )        
        
        var myModal = document.getElementsByClassName("MyModal")[0];         
        myModal.addEventListener('click', (e)=>{
            if (e.target == myModal) {
                this.props.parentMethod();
                console.log("Close Modal function from click");
            }
        })              
    };

    render() {
        return (       
        <div className="MyModal">                                                        
            <div className="modal-box">
                <div className="modalBanner">
                    <strong>Result Info</strong>
                    <button className="close-button" onClick={this.props.parentMethod}><strong>X</strong></button>
                </div>
                <div className="modalContent"> 
                    <h1><strong>{this.props.chosenSportName}</strong></h1>                                                       

                    <p>Sample result</p>
                </div>
            </div>                        
        </div>
        );
    }
}

export default SingleSportResults;