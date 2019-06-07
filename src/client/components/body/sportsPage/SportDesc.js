import React, { PureComponent } from 'react';
import Button from './Button.js'

class SportDesc extends PureComponent {
    constructor (props) {
        super(props);
    }  
    render() {

        return (
            <div className="sport-desc-container">
                <div className="sport-desc-header">
                        <h1 class="page-title">{this.props.sportname}</h1>
                        <div class="intro">
                            <h4 class="post-title">{this.props.loc}</h4>
                            <h4 class="post-title">{this.props.time}</h4>
                            <p class="meta">{this.props.org}</p>
                        </div>
                     
                    <div class="post-content" style={{marginLeft:"150px", marginRight:"150px"}}>	
                            <p class="post-content-desc" style={{textAlign:"justify"}}>Detailed procedures for conducting competitions will be announced before the registration of the competitors start. All competitions in the SELL student games will be held according to the International Sports Federation rules.
                            All competing participants must meet the requirements of the General Regulations of SELL games 2020.
                             </p>
                            <p className="meta">Stay tuned for more information about SELL GAMES 2020!</p>
                            <p className="meta">sellgame2020@gmail.com</p>
                    </div>
                </div>

                
                
                <hr></hr>
                            <a href="/schedule" class="sport-desc-button">Let's Check Schedule</a>
            </div>
        );

    }
}

export default SportDesc;