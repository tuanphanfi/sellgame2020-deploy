import React, { PureComponent } from 'react';
import axios from "axios";


class MainNews extends PureComponent {

    state = { title: '', content: [] };


    render() {

        return (
            <div className="mainNews">
                {/* <div id="newsTitle">Football is one of the favourite Sell Games</div>

                <div className="content">
                    <img className="pic1" src={'./src/client/img/sellgames-football.png'} />


                    <div id="content_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper.
                        Nunc
                        vel pulvinar arcu. Mauris ut orci mi. Donec in mauris vitae nisi tincidunt consectetur condimentum
                        eget
                        ante. Etiam et sapien id sapien cursus molestie id non nunc. Fusce ac rutrum justo. Curabitur
                        sodales
                        mollis ullamcorper. In id orci nisl. In eget magna in purus fringilla lobortis. Pellentesque luctus
                        dolor id imperdiet euismod. Fusce sollicitudin iaculis nunc, a consequat dui mattis scelerisque.
                        Nulla
                        sed tincidunt erat.
                    </div>

                    <img className="pic1" src={'./src/client/img/sellgames1.png'} />

                    <div id="content_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper.
                        Nunc
                        vel pulvinar arcu. Mauris ut orci mi. Donec in mauris vitae nisi tincidunt consectetur condimentum
                        eget
                        ante. Etiam et sapien id sapien cursus molestie id non nunc. Fusce ac rutrum justo. Curabitur
                        sodales
                        mollis ullamcorper. In id orci nisl. In eget magna in purus fringilla lobortis. Pellentesque luctus
                        dolor id imperdiet euismod. Fusce sollicitudin iaculis nunc, a consequat dui mattis scelerisque.
                        Nulla
                        sed tincidunt erat.
                    </div>
                </div> */}

                <div id="newsTitle">{this.props.title}</div>

                <div className="content">

                    {this.props.content.map((c) => {
                        if (c.inputtype == "text") {
                            return <div id="content_text">{c.inputvalue}</div>
                        }
                        else {
                            return <img className="pic1" src={'../../../../../src/client/img/' + c.inputvalue} />
                        }
                    })}
                </div>

            </div>
        );
    }
}

class TopNews extends PureComponent {
    state = {}
    render() {
        return (
            <div className="topNews">
                <p style={{ fontFamily: 'Arial', fontStyle:"Bold", fontSize: "22pt" }}>RELATING NEWS</p>

                {/* <div className="aNews">
                    <img src={'../../../../../src/client/img/SELLgame2.png'} />
                    <p id="topnews_title">SELLGAME firework will be organized in Lahti 2020 </p>
                </div>


                <div className="aNews">
                    <img src={'../../../../../src/client/img/esport.png'} />
                    <p id="topnews_title">Esport for the first time in SELLGAME</p>
                </div>

                <div className="aNews">
                    <img src={'../../../../../src/client/img/ski-jumping.png'} />
                    <p id="topnews_title">Ski Jumping hill in Lahti</p>
                </div> */}
                {this.props.relatingNews.map((c) => {
                    var image = "";
                    for (var i = 0; i < c.content.length; i++) {
                        if (c.content[i].inputtype == "img") {
                            image = c.content[i].inputvalue;
                            break;
                        }
                    }
                    
                        return (
                            <a href={"/anews/"+c._id}>
                            <div className="aNews">
                                <img src={'../../../../../src/client/img/'+image} />
                                <p id="topnews_title">{c.title}</p>
                            </div>
                            </a>
                        )
                


                })}

            </div>
        );
    }
}

class ANews extends PureComponent {
    state = { title: '', content: [], relatingNews: [] }
    newsId = this.props.match.params.newsid;
    componentDidMount() {
        //console.log(this.newsId);
        axios.get('/api/news').then(res => {
            var tag = [];
            var relatingArr = [];

            // Find the main new and its tag
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i]._id == this.newsId) {
                    this.setState({ content: res.data[i].content });
                    this.setState({ title: res.data[i].title });
                    tag = res.data[i].tag.split("#");
                    tag.shift();
                }
            }

            //Loop through all news' tag to find the similar tag of the current news
            for (var i = 0; i < res.data.length; i++) {
                var localtag = res.data[i].tag.split("#");
                localtag.shift();
                //console.log(localtag);
                if(relatingArr.length<3){
                    if (res.data[i]._id != this.newsId) {
                        for (var j = 0; j < tag.length; j++) {
                            for (var k = 0; k < localtag.length; k++) {
                                if (tag[j] == tag[k]) {
                                    relatingArr.push(res.data[i]);
                                }
                            }
    
                        }
                    }
                }
                else{
                    break;
                }
                

            }

            //console.log(relatingArr);
            // Make sure that the relating news area will have 3 items
            if (res.data.length > 3 && relatingArr < 3) {
                for (var i = 0; i < relatingArr.length; i++) {
                    for (var j = 0; j < res.data.length; j++) {
                        if (relatingArr[i]._id != res.data[j]._id && res.data[i] != this.newsId) {
                            relatingArr.push(res.data[j]);
                        }
                    }
                }

            }
            console.log(relatingArr);
            this.setState({ relatingNews: relatingArr });



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

        return (
            <div className="bodyNews-aNews">
                <MainNews title={this.state.title} content={this.state.content} />
                <TopNews relatingNews={this.state.relatingNews} />

            </div>
        );

    }
}

export default ANews;