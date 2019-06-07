import React, { PureComponent } from 'react';

class InfoModal extends PureComponent {
    constructor(props){
        super(props);
    }         
    
    componentDidMount(){
        // document.addEventListener('keyup', (e) => this.CloseModalByEsc(e))
        this.CloseModal();
    }
    componentWillUnmount(){
        //document.removeEventListener('keyup', (e) => this.CloseModalByEsc(e))        
    }


    //Close the modal window by different ways
    CloseModal = () => {    
        // if(this)    
        console.log("inside the CloseModal method of InfoModal")        

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
                </div>
                <div className="modalContent"> 
                    <h1><strong>Sorry, early birds</strong></h1>                                                       

                    <h3>No results yet. Check me after the SELLGAMES 2020 !</h3>
                </div>
            </div>                        
        </div>
        );
    }
}

export default InfoModal;