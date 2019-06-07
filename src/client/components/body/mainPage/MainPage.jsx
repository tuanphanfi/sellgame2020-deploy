import React, { PureComponent } from 'react'
import { Redirect} from 'react-router-dom'

import MainPageCarousel from './MainPageCarousel'
import NewsCarousel from './NewsCarousel'
import SportCarousel from './SportsCarousel'
import SeeMoreButton from './SeeMoreButton'
import Title from './Title'
import Logo from './Logos'

class MainPage extends PureComponent {        
    render() { 
        return ( 

            <div className="mainPage">
                {/* Main Page Carousel */}
                <MainPageCarousel/>
                <div className="mainPageContent">
                    


                    {/* News Carousel */}
                    <Title 
                        title={"News"}
                        id = "news"
                    />
                    <NewsCarousel/>
                    <SeeMoreButton
                        id = "news"
                    />

                    {/* Sports Carousel */}
                    <Title 
                        title={"Sports"}
                        id = "sports"
                    />
                    <SportCarousel sportdata = {this.props.sportdata}/>    
                    <SeeMoreButton
                        id = "sports"
                    />

                    <Title title={"Our partners"}/>
                    <Logo/>
                

                    
                </div>

            </div>
         );
    }
}
 
export default MainPage;