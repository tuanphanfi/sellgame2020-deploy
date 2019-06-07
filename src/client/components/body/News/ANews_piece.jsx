import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class ANewsPiece extends PureComponent {
    // state = { news: [{img,title,id}] };
    
    render() {

        return (
            
            // <div className="bodyNews-aNews_piece">

            //     <img src={'./src/client/img/sellgames-football.png'} />
            //     <div className="bodyNews-textWrapper">
            //         <h1>Footbal is one of the favourite SELL Games</h1>
            //         <p className="bodyNews-textWrapper-date"><em>23 March 2019</em></p>
            //         <p>
            //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper.
            //             Nunc
            //             vel pulvinar arcu. Mauris ut orci mi. Donec in mauris vitae nisi tincidunt consectetur condimentum
            //             eget
            //         </p>

                
            //     </div>
            //     <hr></hr>
            // </div>
            
            <a href={"/anews/"+this.props.linkid}>
            <div className="bodyNews-aNews_piece">
                
                <img src={'./src/client/img/'+this.props.img} />
                <div className="bodyNews-textWrapper">
                    <h1>{this.props.title}</h1>
                    <p className="bodyNews-textWrapper-date"><em>23 March 2019</em></p>
                    <p>
                        {this.props.text}
                    </p>

                
                </div>
                <hr></hr>
            </div>
            </a>
            
        );

    }
}
export default ANewsPiece;