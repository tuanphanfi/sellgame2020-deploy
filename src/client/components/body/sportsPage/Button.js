import React, { Component } from 'react';

class Button extends Component {

    constructor (props) {
        super(props);
    }  
    render (){
        return(
         <div className="button-wrapper" style={{marginBottom:'30px',fontFamily:'Righteous'}}>
            <div className="green-border" style={{width:'160px', height:'50px', border:'2px solid #0E4944', position:'relative', background:'none',marginLeft:'495px'}}></div>
            <div className="yellow-border" style={{width:'160px', height:'50px',border:'2px solid #BE3A22', position:'relative', top:'-40px', left:'5px', background:'none', marginLeft: '500px',textAlign:'center',fontSize:'14px'}}>{this.props.title}</div>
        </div>
        );
    }
}

export default Button;