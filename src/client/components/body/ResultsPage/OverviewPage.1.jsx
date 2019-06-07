import React, { PureComponent } from "react";
import SingleSportResults from "./SingleSportResults";

class Overview extends PureComponent {

  props = {};
  state = {
    sportName: ["FOOTBALL", "ATHLETICS", "JUDO", "WRESTLING", "WEIGHTLIFTING", "KETTLE SPORT", "CROSS TRAINING", "BASKETBALL", "VOLLEYBALL", "FLOORBALL", "JUMPING", "ORIENTEERING", "GOLF", "MÖLKKY", "ESPORT"]
  };

  // Open modal page
  OpenModal = e => {

    // this.forceUpdate();
    console.log("Hello from inside OpenModal method");

    var modal = document.getElementsByClassName("MyModal")[0];
    modal.style.display = "block";

    // alert(e);

  };

  //Close the modal page when click elsewhere modal box
  CloseModal = () => {
    var modal = document.getElementsByClassName("MyModal")[0];
    if (event.target == modal) {
      modal.style.display = "none";
      console.log("Close Modal function");
    }
  };

  render() {
    return (
      <div id="overview" onClick={this.CloseModal}>      
        <SingleSportResults />

        <div className="results-content">
                {this.state.sportName.map(
                   name => (
                      <div className="sport-title" onClick={() => this.OpenModal(name)}>
                        <h1>
                          <strong>{name}</strong>
                        </h1>
                      </div>
                    )
                  )                  
                }
          {/* <div className="sport-title" ida="FOOTBALL" onClick={this.OpenModal}>
            <h1>
              <strong id="name">FOOTBALL</strong>
            </h1>
          </div>          
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>
              <strong>ATHLETICS</strong>
            </h1>
          </div>          
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>
              <strong>JUDO</strong>
            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>
              <strong>WRESTLING</strong>
            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>
              <strong>WEIGHTLIFTING</strong>
            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>
              <strong>KETTLE SPORT</strong>
            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>
              <strong>CROSS TRAINING</strong>

            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>BASKETBALL</strong>
            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>VOLLEYBALL</strong>

            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>FLOORBALL</strong>

            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>SKI JUMPING</strong>

            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>ORIENTEERING</strong>

            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>DISC GOLF</strong>

            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>MÖLKKY</strong>

            </h1>
          </div>
          <div className="sport-title" onClick={this.OpenModal}>
            <h1>

              <strong>ESPORT</strong>

            </h1>
          </div> */}

          {/* <div className="results-board">
                        <h3>2019-4-12</h3>
                        <div className="results-bar">
                            <div className="rank"><h3>1</h3></div>
                            <div className="name"><h3>This is name asdfasdfffffffffffffffffffffffffffffffffffffffasdfasdfasdfasdfasdfasdfasdfasd</h3></div>
                        </div>
                        <div className="results-bar">
                            <div className="rank"><h3>2</h3></div>
                            <div className="name"><h3>This is name</h3></div>
                        </div>
                        <div className="results-bar">
                            <div className="rank"><h3>3</h3></div>
                            <div className="name"><h3>This is name</h3></div>
                        </div>

                        <h3>2019-4-13</h3>
                        <div className="results-bar">
                            <div className="rank"><h3>1</h3></div>
                            <div className="name"><h3>This is name</h3></div>
                        </div>
                        <div className="results-bar">
                            <div className="rank"><h3>2</h3></div>
                            <div className="name"><h3>This is name</h3></div>
                        </div>
                        <div className="results-bar">
                            <div className="rank"><h3>3</h3></div>
                            <div className="name"><h3>This is name</h3></div>
                        </div>
                    </div> */}
        </div>
      </div>
    );
  }
}

export default Overview;
