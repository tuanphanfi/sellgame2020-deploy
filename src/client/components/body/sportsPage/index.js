import React, { Component } from 'react';
import Blocks from './Blocks.js';
import Tag from './Tag.js';
import Button from './Button.js';
import Featured from './featured/index.js';
import SportDesc from './SportDesc.js';
import {Link} from 'react-router-dom';
class SportPage extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     data: [
        //     ['./src/client/img/football.jpg', 'Football','/sports/football'],
        //     ['https://images.unsplash.com/photo-1536407078615-9fd99f2915c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Athletics','/sports/athletics'],
        //     ['https://images.unsplash.com/photo-1542937307-6eeb0267cbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Judo','/sports/judo'],
        //     ['https://images.unsplash.com/photo-1542468019-550cb643a5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',"Wrestling",'/sports/wrestling'],
        //     ['https://images.unsplash.com/photo-1526403646408-57b94dc15399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',"Weightlifting", '/sports/weightlifting'],
        //     ['./src/client/img/kettlebells 2.jpg', 'Kettle Sport','/sports/kettle_sport'],
        //     ['https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80', 'Cross Training','/sports/crossfit'],
        //     ['./src/client/img/BasketBall.jpg', 'Basketball','/sports/basketball'],
        //     ['./src/client/img/volleyball.jpg','Volleyball','/sports/volleyball'],
        //     ['./src/client/img/Floorball.jpg', 'Floorball','/sports/floorball'],
        //     ['https://images.unsplash.com/photo-1515289867998-8612704d97ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Ski Jumping','/sports/skijumping'],
        //     ['https://images.unsplash.com/photo-1464898644169-85eb09c329aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80','Orienteering','/sports/orienteering'],
        //     ['https://images.unsplash.com/photo-1507469964576-83ad33be38d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1699&q=80', 'Disc Golf','/sports/disc_golf'],
        //     ['./src/client/img/Mölkky.jpg', 'Mölkky','/sports/molkky'],
        //     ['https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Esport','/sports/esport']
        // ]}

    
        }
    
    render (){
        console.log(this.props.sportdata)
    
        return(

            // <div>
            //     
            //     <Tag
            //     title="SPORTS"
            //     width="180px"/>

            //     <Blocks
            //     image='./src/client/img/esport.png'
            //     title='E-Sport'
            //     date='Date: 2019-02-14'
            //     desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauri'/>
            //     <Blocks
            //     image='./src/client/img/esport.png'
            //     title='Football'
            //     date='Date: 2019-02-14'
            //     desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauris '/>
            //     <Blocks
            //     image='./src/client/img/esport.png'
            //     title='Weightlifting'
            //     date='Date: 2019-02-14'
            //     desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauris '/>

     
                
            // </div>
           
            <div className="container">
                <p id="pagelocation"><a href="/">Home</a> > Sport Regulations</p>
                <Featured/>
                <h1 className="sport-heading">Sell Games 2020 Sports <span>& Regulations</span></h1>
                    <div className="sport-gallery">
                         
                            {this.props.sportdata.map ((e,i) => {
                          
                                return (
                                    <div className="sport-gallery-item">
                                    
                                    <Link to={e[2]} key={e[1]} style={{height:'50px',width:'100px'}}>
                                        <Blocks
                                        key = {i}
                                        url = {e[0]}
                                        desc ={e[1]} 
                                        onClick={()=>renderItems()}/>
                                     </Link>
                                    </div>
                                )
                                    
                            })}

                     </div>
                   
                    
                
                   
                   {/* <Button title="Let's Check Schedule"/> */}
            </div>
          
          
        );
    }
}

export default SportPage;