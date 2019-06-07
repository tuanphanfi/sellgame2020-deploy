import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from "axios";
import AdminSideBar from "./AdminSideBar";


class ANewsPiece extends PureComponent {
    // state = { news: [{img,title,id}] };
    
    render() {

        return (
            
            <div className="bodyNews-aNews_piece">
                <button type="button" className="remov-button" onClick={()=>this.props.removeItem(this.props.linkid, this.props.title)}>X</button>
                <a href={"/editanews/"+this.props.linkid}>
                <img src={'./src/client/img/'+this.props.img} />
                <div className="bodyNews-textWrapper">
                    <h1>{this.props.title}</h1>
                    <p className="bodyNews-textWrapper-date"><em>23 March 2019</em></p>
                    <p>
                        {this.props.text}
                    </p>

                
                </div>
                <hr></hr>
                </a>
            </div>
            
            
        );

    }
}




class EditNews extends PureComponent {
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
    removeItem=(id, title)=>{
        
        if(confirm("Are you sure to delete the '"+ title+"' post?")){

        
                $.ajax({
                    type: "POST",
                    url: '/deletepost',
                    dataType: 'json',
                    data: JSON.stringify({id: id}),
                    contentType: 'application/json; charset=utf-8',
                    success: (r) => {
            
                    
                        console.log(r);
                    
                    },
                    error: function (e) {
                        console.log(e);
                    }
                });
                
            }
        
    }
    render() {

        return (
           
            <div id="admin-component">                
                <AdminSideBar />             
        
                {this.state.news.map((n) =><ANewsPiece title={n.title} img={n.img} text={n.text} linkid={n.id} removeItem={this.removeItem}/>)}
              
            </div>

        );

    }
}

export default EditNews;
