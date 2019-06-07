import React,  { Component } from 'react';

class Tag extends Component {

    constructor (props) {
        super(props);
    }  
    render (){
        return(
         <div style={{background:'#BE3A22',width:this.props.width,height:'50px', color:'#ffffff',fontFamily:'Righteous',fontSize:'34px',marginLeft:'20px',marginTop:'30px', marginBottom:'10px', textAlign: 'center'}}
         >
            {this.props.title}
        </div>
        );
    }
}

export default Tag;