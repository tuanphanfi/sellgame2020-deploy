import React, { PureComponent } from 'react';
import ContactBoxComponents from './ContactInformation.jsx'

class about extends PureComponent {
    state = {}
    render() {

        return (
            <body>
                <p id="pagelocation"><a href="/">Home</a> > About us</p>
                <div className="about">
                    <h1>About us</h1>
                    <div className="prt">
                        <img src={'./src/client/img/sell_games-opening.png'} />
                        <h1>HISTORY OF SELLGAMES</h1>
                        <p>In 1923 student organizations of Finland, Estonia, Latvia and Lithuania established an extensive co-operation agreement, which resulted in first regionalstudent competition for the university students of the respective countries in Tartu, Estonia.</p>

                    </div>
            
                    <div className="prt0">
                        <p>SELL Student Games is a multi-sport event that is open for all university and college students all over the world. The name of the games are according to the first letters of the hosting countries, Finland, Estonia, Latvia and Lithuania in theirrespective languages (Finnish: Suomi, Estonian: Eesti, Latvian: Latvija, Lithuanian: Lietuva) The principles of the games are that everyone can participate and therefore the event combines top sports and joyful student event.</p> <p>In 1923 student organizations of Finland, Estonia, Latvia and Lithuania established an extensive co-operation agreement, which resulted in first regionalstudent competition for the university students of the respective countries in Tartu, Estonia. The competitions lasted until 1940 when the last winter games were held before the ties between Baltic States were severed by World War II. During this period there were organized separately summer games, winter games and chess tournaments. After Baltic States became independent again the tradition of competition was restored in a meeting held 21.4. 1997, and the SELL Games were organized in 1998 in Tartu. The competition has been open to all university students around the world since then.</p><p>SELL student games</p>
                        <ul>
                            <li>I - 1923 Tartu, Estonia</li>
                            <li>II - 1924 Riga, Latvia</li>
                            <li>III - 1926 Helsinki, Finland</li>
                            <li>IV - 1929 Kaunas, Lithuania</li>
                            <li>V - 1930 Tallinn, Estonia</li>
                            <li>VI - 1931 Riga, Latvia</li>
                            <li>VII - 1932 Helsinki, Finland</li>
                            <li>VIII - 1933 Kaunas, Lithuania</li>
                            <li>IX - 1934 Tartu, Estonia</li>
                            <li>X - 1935 Riga, Latvia</li>
                            <li>XI - 1936 Helsinki, Finland</li>
                            <li>XII - 1937 Kaunas,  Lithuania</li>
                            <li>XIII - 1938 Tartu, Estonia</li>
                            <li>XIV - 1939 Riga, Latvia (cancelled)</li>
                            <li>1940–1997 Not held</li>
                        </ul>
                        <img src={'./src/client/img/ball.jpg'} />
                        <img className="img1" src={'./src/client/img/SELLgame2.png'} />
                    </div>

                    <div className="prt1">
                        <img src={'./src/client/img/girls.jpg'} />
                        <h1 >Lahti, Finland</h1>
                        <p>Lahti – the city of sport!
City of Lahti has decades history of hosting international sports events all year 
round. 
Youtube video: 
https://www.youtube.com/watch?v=J2M2cbEkNA0
Lahti hosts annually Lahti Ski Games (FIS
Nordic World Cup) as well as multiple 
international sports events for example in athletics, basketball, ice hockey and 
triathlon. Lahti distinguishes itself from other Finnish cities as a centre of health 
and wellbeing with a special focus on sports and exercise. Sports facilities. Lahti 
sports center is located at walking distance from the city center and is famous 
for its three Ski Jumping Towers. The area is also home to the Pajulahti and 
Vierumäki sports institutes, both officially recognized as Olympic Training Centers
by the Finnish Olympic Committee.
Lahti is located only 50 minutes away from Helsinki-Vantaa Airport, and the city 
has good road and railway connections in every direction.
More information about the Lahti Region: 
https://visitlahti.fi/en/
Welcome to Host City Lahti!</p>

                    </div>

                    <ContactBoxComponents/>
                </div>
            </body>
        );
    }
}

export default about;