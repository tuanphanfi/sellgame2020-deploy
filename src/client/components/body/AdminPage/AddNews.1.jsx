import React, { PureComponent } from "react";

class AddNews extends PureComponent {
  state = {};
  render() {
    return(           
          <div class="admin-content" id="addNews" >                    
            <span id="no-display">.</span>
            <div class="content">
              <form>
              <label><h3><strong>Title</strong></h3></label><br></br>
              <div class="textinput-size"><input type="text" class="textinput"></input></div>
              <br></br><br></br>
              
              <label for="text-content"><h3><strong>Content</strong></h3></label>                                
              <span class="button-wrap"><button class="round-button-css">+</button><strong>Paragraph</strong></span>
              <span class="button-wrap"><button class="round-button-css">+</button><strong>Image</strong></span>
              <br></br><br></br>
              <div name="text-content" class="textarea-size"><textarea></textarea></div>                                
              <br></br>

              <label><h3><strong>Tag</strong></h3></label><br></br>
              <div class="textinput-size"><input type="text" class="textinput"></input></div>
              <br></br><br></br>
              
              <div class="submit-wrap">
              <button class="rectg-button-wrap">Publish</button>
              <button class="rectg-button-wrap">Save Only</button>              
              </div>
              </form>
            </div>
          </div>        
    )
  }
}

export default AddNews;
