import React, { PureComponent } from 'react';
import ANewsPiece from './ANews_piece.jsx'
import axios from "axios";


class News extends PureComponent {
    state={news:[{title:"", img:"", text:"", id:""}]};
    componentDidMount() {
        // console.log("Hello");
        axios.get('/api/news').then(res => {
            var tempArr=[];
            
            for(var i=0; i<res.data.length;i++){
                var imgname="";
                var text_show="";
                for(var j=0; j<res.data[i].content.length; j++){
                    if(res.data[i].content[j].inputtype=="text"){
                        text_show=res.data[i].content[j].inputvalue;
                        break;
                    }
                }
                for(var j=0; j<res.data[i].content.length; j++){
                    if(res.data[i].content[j].inputtype=="img"){
                        imgname=res.data[i].content[j].inputvalue;
                        break;
                    }
                }
                if(text_show.length>=150){
                    text_show= text_show.substring(0, 150);
                }
                tempArr.push({title: res.data[i].title, img:imgname, text: text_show, id:res.data[i]._id});
            }
            this.setState({ news: tempArr });

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
            <div className="bodyNews">
                <p id="pagelocation"><a href="/">Home</a> > News</p>
                {/* <ANewsPiece />
                <ANewsPiece />
                <ANewsPiece />
                <ANewsPiece /> */}
                
                {this.state.news.map((n) =><ANewsPiece title={n.title} img={n.img} text={n.text} linkid={n.id} />)}
              
            </div>

        );

    }
}

export default News;