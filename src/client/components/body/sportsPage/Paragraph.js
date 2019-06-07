import React,  { Component } from 'react';

class Paragraph extends Component {
    constructor (props) {
        super(props);
    }  
    render (){
        return(
       
            <div >
                <h3 className="rule-title">{this.props.title}</h3>
                <p className="rule-paragraph-desc">{this.props.desc}</p>
                <p className="rule-paragraph-desc">{this.props.desc2}</p>
                <p className="rule-paragraph-desc">{this.props.desc3}</p>
                <p className="rule-paragraph-desc">{this.props.desc4}</p>
                <p className="rule-paragraph-desc">{this.props.desc5}</p>
            </div>
        );
    }
}

export default Paragraph;