import React,  { Component } from 'react';

class Blocks extends Component {
    constructor (props) {
        super(props);
    }  
    render (){
        return(
        //  <div style={{display: 'flex', margin:'25px'}}
        //  >
        //      <img src={this.props.image} style={{margin:'10px', width:'300px',height:'200px'}}/>
        //      <div className="block-desc" style={{display:'flex', flexDirection:'column' }}>
        //         <h3 >{this.props.title}</h3>
        //         <span>{this.props.date}</span>
        //         <p style={{fontSize:'16px'}}>{this.props.desc}</p> 
        //     </div>
        //     <a href="" style={{alignSelf:'flex-end', width:'250px',fontSize:'12px'}}>Load more</a>

        // </div>
            <div className="sport-gallery-item">
                <img className="sport-gallery-image" src={this.props.url} />
                    <h2 className="sport-desc">{this.props.desc}</h2>
            </div>
        );
    }
}

export default Blocks;