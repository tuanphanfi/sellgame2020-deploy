import React, { PureComponent } from "react";

class TextInput extends PureComponent {
  render(){
      return ( 
        <div className="input-wrap"> 
          <button type="button" className="remov-button" onClick={()=>this.props.removeItem(this.props.pos)}>X</button>          
          <div className="textarea-size"><textarea type="textarea" name={"text-"+this.props.pos} value={this.props.value} onChange={ (event) => this.props.handleChange(event,this.props.items ,this.props.pos) }></textarea>  
          </div>
        </div>          
      )}
}
class ImgShow extends PureComponent {
  render(){
      return (
          <div className="input-wrap">
              <button type="button" className="remov-button" onClick={()=>this.props.removeItem(this.props.pos)}>X</button>          
              <input type="hidden" name={"img-"+this.props.pos} value={this.props.value} />
              <img className="image-sizing" src={'./src/client/img/'+this.props.value}/>
             
          </div>
          
      )}
}
class ImgInput extends PureComponent {
  render(){
      return (
        <div className="input-wrap">
          <form id ="imgForm" action="/imgupload" method="POST" encType="multipart/form-data">
            <button type="button" className="remov-button" onClick={()=>this.props.removeItem(this.props.pos)}>X</button>          
            <div className="textarea-size"><input type="file" name={"img-"+this.props.pos} /></div>
            <button className="rectg-button-wrap" id="savestuff1" type="button" onClick={(e)=>this.props.savestuff(e, this.props.pos)} >Save</button>
          </form>
          
        </div>
      )}
}

class AddNews extends PureComponent {
  state = {items:[]};
    imgHandleChange=(event, id)=> {
        var tempArr = this.state.items.slice();
        for(var i=0; i<tempArr.length;i++){
            if (tempArr[i].id==id){
                tempArr[i].value= URL.createObjectURL(event.target.files[0]);
                //tempArr[i].value="file-"+this.myImgId;
            }
        }
        this.setState({
          items:tempArr
        })
      }
      textHandleChange=(event, item, id)=> {
        var tempArr =  this.state.items.slice();
        for(var i=0; i<tempArr.length;i++){
            if (tempArr[i].id==id){
                tempArr[i].value= event.target.value;
            }
        }
        
        this.setState({
          items: tempArr
        });
      }
      removeItem=(id)=>{
        
        var tempArr = this.state.items.slice();
        for(var i=0; i<tempArr.length;i++){
            if (tempArr[i].id==id &&tempArr[i].type=="img"){
                console.log(tempArr[i].value);
                $.ajax({
                    type: "POST",
                    url: '/deleteimg',
                    dataType: 'json',
                    data: JSON.stringify({imgname: tempArr[i].value}),
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
        tempArr=tempArr.filter(t=>t.id!==id);
        for(var i=0; i<tempArr.length;i++){
            if (tempArr[i].id>id){
                tempArr[i].id -= 1;
            }
        }
        
        this.setState({items: tempArr})
        
        // tempArr.filter(t=>t.id!==id);
        
        //this.setState(prevState=>{return {items: prevState.items.filter(t=>t.id!==id)}});
    }
    addTextBox(){
        var tempArr = this.state.items.slice();
        // console.log(this.state.items.length);
        tempArr.push({id: this.state.items.length, type:"text", value:""});
        //console.log(tempArr);
        this.setState({
            items: tempArr
          });
          //console.log(typeof this.state.items);
          var indexnb =this.state.items.length;
            // var textInput= '<div><input type="text" name="text-'+indexnb+'"/><p on-click="()=>this.removeItem()">x</p></div>';
            // $("#submitform").before(textInput);
        
    }
    addImgBox(){
        
        var tempArr = this.state.items.slice();
        tempArr.push({id: this.state.items.length, type:"imgupload", value:null});
        this.setState({
            items: tempArr
          });
        }
        savestuff=(e,id)=>{
          console.log(($(e.target).parent()).serialize());
  
          var fd = new FormData();
          var files = ($(e.target).parent().find(".textarea-size").find('input'))[0].files[0];
          fd.append('file',files);
      //     $.post(($(e.target).parent()).attr('action'),fd.value, function(response){
      //         // do something here on success
      //         alert(response);
      //   },'json');
      //   return false;
        $.ajax({
          type: "POST",
          url: ($(e.target).parent()).attr('action'),
          data: fd,
          processData: false,
          contentType: false,
          success: (r) => {
  
              //($(e.target).parent()).replaceWith('<img src="../img/'+r+"/>");
          
              var tempArr =  this.state.items.slice();
              for(var i=0; i<tempArr.length;i++){
                  if (tempArr[i].id==id){
                      tempArr[i].value= r;
                      tempArr[i].type= 'img';
                  }
              }
              
              this.setState({
                items: tempArr
              });
          
          },
          error: function (e) {
              console.log(e);
          }
      });
  
          
      }
  render() {
    return(           
          <div className="admin-content" id="addNews" >                    
            <span id="no-display">.</span>
            <div className="content">
            <form action="/upload" method="POST" encType="multipart/form-data">
              <label><h3><strong>Title</strong></h3></label><br></br>
              <div className="textinput-size"><input type="text" className="textinput" name="title"></input></div>
              <br></br><br></br>
              
              
              <label><h3><strong>Content</strong></h3></label>                                
              <span className="button-wrap"><button type="button" className="round-button-css" id="addText" onClick={()=>this.addTextBox()}>+</button><strong>Paragraph</strong></span>
              <span className="button-wrap"><button type="button" className="round-button-css" id="addImage" onClick={()=>this.addImgBox()}>+</button><strong>Image</strong></span>
              <br></br><br></br>
              {/* <div name="text-content" className="textarea-size"><textarea></textarea></div>                                 */}

            {this.state.items.map((n) => {
              if(n.type=="text"){
                  return <TextInput pos={n.id} value={n.value} removeItem={this.removeItem} handleChange={this.textHandleChange}/>
              }
              else if(n.type=="img"){
                      return <ImgShow pos={n.id} removeItem={this.removeItem} value={n.value}/>
                  }
              else {
                  return <ImgInput pos={n.id} removeItem={this.removeItem} handleChange={this.imgHandleChange} savestuff={this.savestuff}/>
                
                
              }
              
          })}

              <br></br>

              <label><h3><strong>Tag</strong></h3></label><br></br>
              <div className="textinput-size"><input type="text" className="textinput" name="tag"></input></div>
              <br></br><br></br>
              
              <div className="submit-wrap">
              <input type="submit" class="rectg-button-wrap" name="submitbutton" value="Save only"/>
              <input type="submit" class="rectg-button-wrap" name="submitbutton" value="Publish"/>
              </div>
              </form>
            </div>
          </div>        
    )
  }
}

export default AddNews;