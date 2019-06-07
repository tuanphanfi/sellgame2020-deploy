import React, { PureComponent } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import MainPageInfoModal from './MainPageInfoModal'
class MainPageCarousel extends PureComponent {

    props = {};
    state = {
        infoModalIsOpen: true,
    }

    handleInfoModalState = ()=>{    
        this.setState((prevState) =>
          {        
            return {
              infoModalIsOpen: !prevState.infoModalIsOpen,          
            }        
          }    
        );    
        console.log("handleInfoModalState method, change state of modalIsOpen"); 
      };
    // Open info modal
    getInfoModal = () =>{
    if(this.state.infoModalIsOpen == false){
        return(
        <MainPageInfoModal
            parentMethod = {this.handleInfoModalState}        
        />
        )
    }
    else
        return null;
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-lg-12 col-centered carousel">
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={'./src/client/img/sell_games-opening.png'}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={'./src/client/img/Kisapuisto.jpg'}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={'./src/client/img/sellgames-football.png'}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                    <div className="carouselCaption">
                            <h1>WELCOME TO SELL GAMES 2020</h1>
                            <h1>LIGHT THE FIRE</h1>
                            <h2>OVER 1200 PEOPLE, 16+ DIFFERENT SPORT</h2>
                            <h3>SEE YOU IN LAHTI May 15 - 17, 2020</h3>
                            <div className="carouselEnrollButton d-flex align-items-center justify-content-center" onClick={this.handleInfoModalState}>ENROLLMENT</div>                            
                    </div>
                </div>
                {this.getInfoModal()}
            </div>
        );
    }
}
 
export default MainPageCarousel;