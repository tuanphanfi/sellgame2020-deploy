import React, { Component } from 'react';
import axios from "axios";
import ScheduleInfoModal from './ScheduleInfoModal'

class ScheduleItem extends Component {
    expand_id = "expand-info" + this.props.item._id;
    expandInfo = {
        textAlign: 'left',
        border: '0.02em solid black',
        padding: '1em',
        display: 'none',
    }
    SeeDescription = () => {
        $("#" + this.expand_id).toggle();
        //console.log(e.target);
    }    

    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.item.time}</td>
                    <td>{this.props.item.event}</td>
                    <td>{this.props.item.location}</td>
                    <td><button id="desc-extend" onClick={this.SeeDescription}>MORE</button></td>
                </tr>
                <tr>
                    <td id={this.expand_id} colSpan="4" style={this.expandInfo}>{this.props.item.description}</td>
                </tr>
            </React.Fragment>




        )
    }
}

class CustomOption extends Component {
    dateOptions = ["All days", '2019-14-02', '2019-15-02', '2019-16-02'];
    decreaseDate(e) {
        var clicked = e.target
        var currentDate = $(clicked).parent().find("input").val();
        for (var i = 0; i < this.dateOptions.length; i++) {
            if (currentDate === this.dateOptions[i] && i != 0) {
                $(clicked).parent().find("input").val(this.dateOptions[--i]);
                break;
            }
            if (currentDate === this.dateOptions[i] && i == 0) {
                break;
            }

        }
    }

    increaseDate(e) {
        var clicked = e.target
        var currentDate = $(clicked).parent().find("input").val();
        for (var i = 0; i < this.dateOptions.length; i++) {
            if (currentDate === this.dateOptions[i] && i != 3) {
                //$(clicked).parent().find("input").val(this.dateOptions[i++]);
                $('#dateFilter').val(this.dateOptions[++i]);
                break;
            }
            if (currentDate === this.dateOptions[i] && i == 3) {
                break;
            }

        }
        //console.log($(clicked).parent().find("input").val());
    }

    render() {
        return (
            <React.Fragment>
            <p id="filterAppear" onClick={()=>$("#filterSection").toggle()}>+Filter Options</p>
            <div id="filterSection">
                <div id="dateSelect">
                    <label><b>Date</b></label><i className='fas fa-caret-left' onClick={(e) => this.decreaseDate(e)}></i><input type="text" id="dateFilter" defaultValue={this.dateOptions[0]} /><i className='fas fa-caret-right' onClick={(e) => this.increaseDate(e)}></i>
                </div>
                <div id="sportSelect">
                <label><b>Sports</b></label>
                <select id="sportOption">
                    <option>All Sports</option>
                    <option>Skiing</option>
                    <option>Basketball</option>
                    <option>Football</option>
                    <option>Wrestling</option>
                </select>
                
                </div>
                <button onClick={() => this.props.filterFunc($('#dateFilter').val(), $("#sportOption").val())}>Filter</button>
            </div>
            </React.Fragment>
        )
    }
}

class Schedule extends Component {
    // state={scheduleArr:[{id: '0',time:"2019-14-02", event:"Skiing", location:"Lahti Jumping Hill", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauris"},
    // {id: '1',time:"2019-15-02", event:"Basketball", location:"Stadium ABC", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauris"},
    // {id: '2', time:"2019-16-02", event:"Football", location:"Stadium ABC", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauris"},
    // {id: '3', time:"2019-16-02", event:"Wrestling", location:"Stadium ABC", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauris"}

    // ]};

    // filter=(date, sport)=>{
    //     console.log(date+" "+ sport);
    //     var filterArr=[];
    //     for(var i=0;i<this.state.scheduleArr.length;i++){
    //         if(this.state.scheduleArr[i].time === date){
    //             if(sport==="All Sports"){
    //                 filterArr.push(this.state.scheduleArr[i]);
    //             }
    //             else{
    //                 if(this.state.scheduleArr[i].event === sport){
    //                     filterArr.push(this.state.scheduleArr[i]);
    //                 }
    //             }
    //         }
    //     }
    //     this.setState({scheduleArr:filterArr});


    state = {             
        scheduleArr: [] ,
        infoModalIsOpen: false
    };

    //------------------------Info Modal------------------------------
    handleInfoModalState = ()=>{    
        this.setState(() =>
          {        
            return {
              infoModalIsOpen: true,          
            }        
          }    
        );    
        console.log("handleInfoModalState method, change state of infoModalIsOpen"); 
      };
    // Open info modal
    getInfoModal = () =>{
    if(this.state.infoModalIsOpen == false){
        return(
        <ScheduleInfoModal
            parentMethod = {this.handleInfoModalState}        
        />
        )
    }
    else
        return null;
    }

    //----------------------------------------------------------------
    componentDidMount() {
        // console.log("Hello");
        axios.get('/api/schedule').then(res => {

            this.setState({ scheduleArr: res.data });

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
    filter = (date, sport) => {
        console.log(date + " " + sport);
        var filterArr = [];
        var dbArr = [];
        axios.get('/api/schedule').then(res => {

            // console.log(res.data[0].event);
            var tempArr = res.data;
            dbArr = tempArr.slice();
            for (var i = 0; i < dbArr.length; i++) {
                if (date === "All days") {
                    if (sport === "All Sports") {
                        filterArr.push(dbArr[i]);
                    }
                    else {
                        if (dbArr[i].event === sport) {
                            filterArr.push(dbArr[i]);
                        }
                    }
                }
                else if (dbArr[i].time === date) {
                    if (sport === "All Sports") {
                        filterArr.push(dbArr[i]);
                    }
                    else {
                        if (dbArr[i].event === sport) {
                            filterArr.push(dbArr[i]);
                        }
                    }
                }
            }
            this.setState({ scheduleArr: filterArr });
        })

    }
    render() {
        return (
            <div className="schedule">
                {this.getInfoModal()}
                <p id="pagelocation"><a href="/">Home</a> > Schedule</p>
                <h2>Schedule</h2>
                <CustomOption filterFunc={this.filter} />
                <table>
                    <tbody>
                        <tr>
                            <th>TIME</th>
                            <th>EVENT</th>
                            <th>LOCATION</th>
                            <th></th>
                        </tr>

                        {/* <tr>
                        <td>2019-14-02</td>
                        <td>Skiing</td>
                        <td>Lahti Jumping Hill</td>
                        <td><button id="desc-extend" onClick={this.SeeDescription}>See more</button></td>
                    </tr>
                    <div id="expand-info" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a eros ac est dictum ullamcorper. Nunc vel pulvinar arcu.Mauris ut orci mi. Donec in mauris
                    </div>
                    <tr>
                        <td>2019-15-02</td>
                        <td>Basketball</td>
                        <td>Stadium ABC</td>
                        <td><button>See more</button></td>
                    </tr>
                    <tr>
                        <td>2019-16-02</td>
                        <td>Football</td>
                        <td>Stadium ABC</td>
                        <td><button>See more</button></td>
                    </tr>
                    <tr>
                        <td>2019-16-02</td>
                        <td>Wrestling</td>
                        <td>Stadium ABC</td>
                        <td><button>See more</button></td>
                    </tr> */}
                        {this.state.scheduleArr.map((item) => <ScheduleItem item={item} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Schedule;