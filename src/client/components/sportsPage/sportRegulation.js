import React, { Component } from 'react';
import Blocks from './Blocks.js';
import Paragraph from './Paragraph.js';
import Tag from './Tag.js';
import Button from './Button.js';
import {Link} from 'react-router-dom';
import MapComponents from '../body/about/ContactInformation.jsx';
class GeneralRegulation extends Component {
    
    
    render (){
    
        return(

            <div className="rule-container">
                <h1 className="name-rule">Sport Regulations</h1>
                    <p className='rule-paragraph-desc'>XXXVI SELL Student Games 2020 will be held 15-17 May 2020 in Lahti, Finland. 
                        SELL games 2020 are open to all the university students around the world. 
                    </p>
                <Paragraph
                title='COMPETITIONS & PROGRAMME'
                desc='Competitions will be organized in the following sports: Athletics, Basketball, Cross training, Disc golf, eSport, Floorball, Football, Judo, Kettlebell sport, Mölkky, Orienteering, Ski jumping, Volleyball, Weightlifting and Wrestling'
                desc2='The regulations of the International Sports Federation are followed in each sport. The detailed regulations are informed on the website prior to the registration in autumn 2019. Schedules and competition systems will be provided after registration.'
                />
                <Paragraph
                title='CEREMONIES & FESTIVAL PROGRAMME'
                desc='Opening ceremonies are organized on Friday May 15 and closing ceremony after the final medal ceremony on Sunday May 17.
                Festival program includes exhibition sports, additional team events and After Sport Party on Saturday May 16.'
                desc2='Festival program includes exhibition sports, additional team events and After Sport Party on Saturday May 16.'
                />
                <Paragraph
                title='PARTICIPANTS'
                desc='SELL student games 2020 shall be open for participation for university students all around the world. All participants shall represent their own university. There is no age limit for the participants. In case of team sports, the players of a team must be from the same university. Students who graduated in 2019 can also participate.'
                desc2='All participants are required to have appropriate medical (and travel) insurance to cover for medical expenses. The organizer shall ensure first aid at the competition venues for all accredited persons.'
                desc3='All participants must be ready for doping control.'
                desc4='All participants with their participation are informed and agree that audio, video and pictures taken during SELL Student Games with their face (body) can be published by organizers without participants’ personal signature or/and other agreement. If not –please contact LOC'
                />
                <Paragraph
                title='REGISTRATION'
                desc='SELL student games 2020 shall beThe online registration system found on the SELL Games 2020 official homepage, will be ready for registrations on January 2020, and will end in the beginning of April. Every participant (including delegation) needs to provide personal details (name, photo, accommodation type etc.). Student ID or relevant document to ensure student status will be required in the accreditation to the competition.
                open for participation for university students all around the world. All participants shall represent their own university. There is no age limit for the participants. In case of team sports, the players of a team must be from the same university. Students who graduated in 2019 can also participate.'
                />
                <Paragraph
                title='ENTRY FEES'
                desc='SELL countries – 30€ / person / day'
                desc2=' Non SELL countries – 40€ / person / day'
                desc3='SELL countries: Finland, Estonia, Latvia and Lithuania'
                />
                <div className='general-rules-fee'>
                    <p>The entry fee includes: <br></br>
                    Participation in competition <br></br>
                    Catering three times a day (breakfast, lunch, dinner)<br></br>
                    Entrance to all competitions, cultural activities and ceremonies<br></br>
                    The entry fee does NOT include accommodation and travel expenses.</p>
                </div>
                <Paragraph
                title='ACCOMMODATION'
                desc='SELL countries – 30€ / persoFloor lodging: (with own mattress and sleeping bags) – 5€ / person/night'
                desc2='Different accommodation options for SELL participants with prices (from 20€ / person / night) will be informed on the official website before registration begins.'
                desc3='SELL countries: Finland, Estonia, Latvia and Lithuania'
                />
                <Paragraph
                title='PROTESTS'
                desc='All protests regarding the process and execution of competitions or actions of competitors will be solved by the Head Referee in accordance with the laws of the international regulations of that sport event.'
                desc2='If the solution of the Head Referee is not satisfying, the protest must be submitted in written form (with 50-euro caution money) within half an hour after the end of the competition or game, which caused the protest, in the corresponding sport’s secretariat. If protesting succeeds the caution
                money will be refunded. Later protests shall not be satisfied.'
                desc3='All protests regarding the results must be submitted during the day of the competition in the
                Competition office.'
                desc4='All questions and protests shall be answered and the final decision made by the Protest Committee
                consisting of the Head of the Games, the Head of Sport, the Responsible of the Sport, the Head
                Referee, the Secretary General and the official representative of the organizer.'
                desc5='The coaches/representatives of the teams in question are also obliged to present during the
                discussion process in addition to the Protest Committee.'
                />
                
                <MapComponents/>
                   
                 
            </div>
          
          
        );
    }
}

export default GeneralRegulation;