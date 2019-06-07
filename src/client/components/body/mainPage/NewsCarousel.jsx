import React, { PureComponent } from 'react';
import axios from "axios";
import CarouselItem from './CarouselItem';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

class NewsCarousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // data: [
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     {
            //         title: "title",
            //         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //         imageUrl: "./src/client/img/SELLgame2.png",
            //     },
            //     // {
            //     //     title: "Lacrosse",
            //     //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            //     //     imageUrl: "./src/client/img/SELLgame2.png",
            //     // },
            // ],
            data: [],
            display: "",
            page: 0,
            numberOfPages: 0,
        };
    }
    renderCarousel(i) {
        if (i <= this.state.display.length - 1)
        {
            return (
                <p className="col-lg-4">
                    <CarouselItem
                    imageUrl={this.state.display[i].imageUrl}
                    title={this.state.display[i].title}
                    url={this.state.display[i].url}
                    //content={this.state.display[i].content} 

                    // class = "col-lg-12 carouselItem"
                    />
                </p>

            ); 
        }
    }
    createArray(i) {
        console.log("Page when render: " + this.state.page)
        this.state.display = null;
        this.state.display = this.state.data.slice(3*i, 3*i + 3);
        console.log(this.state.display)
    }
    nextPage = () => {
        console.log("next")
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
    componentWillMount(){
        axios.get('/api/news').then(res => {
            console.log("Axios");
            var tempArr=[];
            
            for(var i=0; i<res.data.length;i++){
                var imgname="";
               
                for(var j=0; j<res.data[i].content.length; j++){
                    if(res.data[i].content[j].inputtype=="img"){
                        imgname=res.data[i].content[j].inputvalue;
                        break;
                    }
                }
                
                tempArr.push({title: res.data[i].title, imageUrl:'./src/client/img/'+imgname, url:"anews/"+res.data[i]._id});
            }
            this.setState({ data: tempArr });
            if (this.state.data.length % 3 == 0)
            {
                var pageCount = (Math.floor(this.state.data.length / 3)) - 1;
                this.setState({ numberOfPages: pageCount});
            }
            else
            {
                var pageCount = Math.floor(this.state.data.length / 3);
                this.setState({ numberOfPages: pageCount});
            }
        })
            .catch((error) => {
                if (error.response) {
                    alert('Code: ' + error.response.data.error.code +
                        '\r\nMessage: ' + error.response.data.error.message);
                } else {
                    console.log('Error', error.message);
                }

            })
           
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
 
export default NewsCarousel;