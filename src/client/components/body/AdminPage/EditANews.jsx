import React, { PureComponent } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";
class TextInput extends PureComponent {
    render() {
        return (
            <div className="input-wrap">
                <button type="button" className="remov-button" onClick={() => this.props.removeItem(this.props.pos)}>X</button>
                <div className="textarea-size"><textarea type="textarea" name={"text-" + this.props.pos} value={this.props.value} onChange={(event) => this.props.handleChange(event, this.props.items, this.props.pos)}></textarea>
                </div>
            </div>
        )
    }
}
class ImgShow extends PureComponent {
    render() {
        return (
            <div>
                <input type="hidden" name={"img-" + this.props.pos} value={this.props.value} />
                <img src={'../../../../../src/client/img/' + this.props.value} />
                <p onClick={() => this.props.removeItem(this.props.pos)}>X</p>
            </div>

        )
    }
}
class ImgInput extends PureComponent {
    render() {
        return (
            <div className="input-wrap">
                <form id="imgForm" action="/imgupload" method="POST" encType="multipart/form-data">
                    <button type="button" className="remov-button" onClick={() => this.props.removeItem(this.props.pos)}>X</button>
                    <div className="textarea-size"><input type="file" name={"img-" + this.props.pos} /></div>
                    <button id="savestuff1" type="button" onClick={(e) => this.props.saveImg(e, this.props.pos)} >Save</button>
                </form>

            </div>
        )
    }
}

class EditANews extends PureComponent {
    state = {title:'',content:[], tag:""};
    newsId = this.props.match.params.newsid;
    componentDidMount() {
        console.log(this.newsId);
        axios.get('/api/news').then(res => {
            //console.log("Axios");
            //console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                console.log(res.data[i]._id);
                if (res.data[i]._id == this.newsId) {
                    this.setState({title: res.data[i].title, content: res.data[i].content, tag: res.data[i].tag});

                }
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
    imgHandleChange = (event, id) => {
        var tempArr = this.state.content.slice();
        for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i].id == id) {
                tempArr[i].inputvalue = URL.createObjectURL(event.target.files[0]);
                //tempArr[i].value="file-"+this.myImgId;
            }
        }
        this.setState({
            content: tempArr
        })
    }
    textHandleChange = (event, item, id) => {
        var tempArr = this.state.content.slice();
        for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i].id == id) {
                tempArr[i].inputvalue = event.target.value;
            }
        }

        this.setState({
            content: tempArr
        });
    }
    removeItem = (id) => {
        if(confirm("Are you sure to delete?")){
        var tempArr = this.state.content.slice();
        for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i].id == id && tempArr[i].inputtype == "img") {
                console.log(tempArr[i].inputvalue);
                $.ajax({
                    type: "POST",
                    url: '/deleteimg',
                    dataType: 'json',
                    data: JSON.stringify({ imgname: tempArr[i].inputvalue }),
                    contentType: 'application/json; charset=utf-8',
                    success: (r) => {

                        //($(e.target).parent()).replaceWith('<img src="../img/'+r+"/>");

                        console.log(r);

                    },
                    error: function (e) {
                        console.log(e);
                    }
                });
                break;
            }
        }
        tempArr = tempArr.filter(t => t.id !== id);
        for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i].id > id) {
                tempArr[i].id -= 1;
            }
        }

        this.setState({ content: tempArr })

        // tempArr.filter(t=>t.id!==id);

        //this.setState(prevState=>{return {items: prevState.items.filter(t=>t.id!==id)}});
    }
    }
    addTextBox() {
        var tempArr = this.state.content.slice();
        // console.log(this.state.items.length);
        tempArr.push({ id: this.state.content.length, inputtype: "text", inputvalue: "" });
        //console.log(tempArr);
        this.setState({
            content: tempArr
        });
       

    }
    addImgBox() {

        var tempArr = this.state.content.slice();
        tempArr.push({ id: this.state.content.length, inputtype: "imgupload", inputvalue: null });
        this.setState({
            content: tempArr
        });
    }
    saveImg = (e, id) => {
        console.log(($(e.target).parent()).serialize());

        var fd = new FormData();
        var files = ($(e.target).parent().find(".textarea-size").find('input'))[0].files[0];
        fd.append('file', files);

        $.ajax({
            type: "POST",
            url: ($(e.target).parent()).attr('action'),
            data: fd,
            processData: false,
            contentType: false,
            success: (r) => {

                var tempArr = this.state.content.slice();
                for (var i = 0; i < tempArr.length; i++) {
                    if (tempArr[i].id == id) {
                        tempArr[i].inputvalue = r;
                        tempArr[i].inputtype = 'img';
                    }
                }

                this.setState({
                    content: tempArr
                });

            },
            error: function (e) {
                console.log(e);
            }
        });


    }

    

    titleChange=(e)=>{
        this.setState({
            title: e.target.value
        });
    }
    tagChange=(e)=>{
        this.setState({
            tag: e.target.value
        });
    }

    render() {
        return (
        <div id="admin-component">                
            <AdminSideBar />
            <div className="admin-content" id="addNews" >
                <span id="no-display">.</span>
                <div className="content">
                    <span id="no-display">.</span>
                    <form action="/updatefromnews" method="POST" encType="multipart/form-data">
                    <input type="hidden" name="update_id" value={this.newsId} />
                        <label><h3><strong>Title</strong></h3></label><br></br>
                        <div className="textinput-size"><input type="text" className="textinput" name="title" defaultValue={this.state.title} onChange={(e)=>this.titleChange(e)}></input></div>
                        <br></br><br></br>


                        <label><h3><strong>Content</strong></h3></label>
                        <span className="button-wrap"><button type="button" className="round-button-css" id="addText" onClick={() => this.addTextBox()}>+</button><strong>Paragraph</strong></span>
                        <span className="button-wrap"><button type="button" className="round-button-css" id="addImage" onClick={() => this.addImgBox()}>+</button><strong>Image</strong></span>
                        <br></br><br></br>
                        {/* <div name="text-content" className="textarea-size"><textarea></textarea></div>                                 */}

                        {this.state.content.map((n) => {
                            if (n.inputtype == "text") {
                                return <TextInput pos={n.id} value={n.inputvalue} removeItem={this.removeItem} handleChange={this.textHandleChange} />
                            }
                            else if (n.inputtype == "img") {

                                return <ImgShow pos={n.id} removeItem={this.removeItem} value={n.inputvalue} />
                            }
                            else {
                                console.log("Hello");
                                return <ImgInput pos={n.id} removeItem={this.removeItem} handleChange={this.imgHandleChange} saveImg={this.saveImg} />


                            }

                        })}

                        <br></br>

                        <label><h3><strong>Tag</strong></h3></label><br></br>
                        <div className="textinput-size"><input type="text" className="textinput" name="tag" defaultValue={this.state.tag} onChange={(e)=>this.tagChange(e)}></input></div>
                        <br></br><br></br>

                        <div className="submit-wrap">
                        <input type="submit" class="rectg-button-wrap" name="submitbutton" value="Save only"/>
              <input type="submit" class="rectg-button-wrap" name="submitbutton" value="Publish"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default EditANews;