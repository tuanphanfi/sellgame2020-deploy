import React, { PureComponent } from 'react';
import CarouselItem from './CarouselItem';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

class SportCarousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: "Athletics",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Judo",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Wrestling",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Weightlifting",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Floorball",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Volleyball",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Football",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Ski Jumping",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Orienteering",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Disc Golf",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Mölkky",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Esport",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Pesäpallo",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                {
                    title: "Roller Derby",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    imageUrl: "./src/client/img/SELLgame2.png",
                },
                // {
                //     title: "Lacrosse",
                //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                //     imageUrl: "./src/client/img/SELLgame2.png",
                // },
            ],
            //data below was replaced with sport data, which is displayed in sport page 
            display: "",
            page: 0,
            numberOfPages: 0,
            
        };
        // console.log("Datas: " + this.state.data.length);
        console.log("Datas: " + this.props.sportdata.length);
        if (this.props.sportdata.length % 3 == 0)
        {
            this.state.numberOfPages = (Math.floor(this.props.sportdata.length / 3)) - 1;
        }
        else
        {
            this.state.numberOfPages = Math.floor(this.props.sportdata.length / 3);
        }
        console.log("Number of pages: " + this.state.numberOfPages)
        console.log("Page: " + this.state.page)
    }
    renderCarousel(i) {
        if (i <= this.state.display.length - 1)
        { 
            return (
                <div className="col-lg-4 sportCarouselItem">
                    <div >                    
                        <CarouselItem
                        imageUrl={this.state.display[i][0]}
                        url = {this.state.display[i][2]}
                        title = {this.state.display[i][1]}
                        />
                    </div>

                    {/* <div className="SportItemCaption d-flex align-items-center justify-content-center">
                        {this.state.display[i][1]}
                    </div> */}
                </div>
            ); 

        }
    }
    createArray(i) {
        console.log("Page when render: " + this.state.page)
        this.state.display = null;
        this.state.display = this.props.sportdata.slice(3*i, 3*i + 3);
        console.log(this.state.display)
    }
    nextPage = () => {
        let page = this.state.page;
        if (page < this.state.numberOfPages) {
            this.setState({page: page + 1});
        }
        else {
            this.setState({page: 0});
        }
    }
    prevPage = () => {
        let page = this.state.page;
        if(page != 0) {
            this.setState({page: page - 1});
        }
        else {
            this.setState({page: this.state.numberOfPages})
        }
    }

    
    render() { 
        this.createArray(this.state.page);
        return (
            <div className="row myCarousel">
                <PrevButton prevPage={this.prevPage}/>
                    <div className="col-lg-10">
                        {this.renderCarousel(0)}
                        {this.renderCarousel(1)}
                        {this.renderCarousel(2)}
                    </div>
                <NextButton nextPage={this.nextPage}/>
            </div>
        );
    }
}
 
export default SportCarousel;