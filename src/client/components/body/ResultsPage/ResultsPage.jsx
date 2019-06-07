import React, { PureComponent } from 'react';
import Overview from './OverviewPage';

class Results extends PureComponent {
    state = {
    // TRAM FUNCTIONS
    }
    dateOptions = ["All days", '2019-14-02', '2019-15-02', '2019-16-02'];
    decreaseDate(e) {
        var clicked = e.target
        var currentDate = $(clicked).parent().find(".date-field").find("h3").text();
        for (var i = 0; i < this.dateOptions.length; i++) {
            if (currentDate === this.dateOptions[i] && i != 0) {
                $(clicked).parent().find(".date-field").find("h3").text(this.dateOptions[--i]);
                break;
            }
            if (currentDate === this.dateOptions[i] && i == 0) {
                break;
            }

        }
    }

    increaseDate(e) {
        var clicked = e.target
        var currentDate = $(clicked).parent().find(".date-field").find("h3").text();
        console.log(currentDate);
        for (var i = 0; i < this.dateOptions.length; i++) {
            if (currentDate === this.dateOptions[i] && i != 3) {
                
                $(clicked).parent().find(".date-field").find("h3").text(this.dateOptions[++i]);
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
            <div id="results-component">                
                <p id="pagelocation"><a href="/">Home</a> > Results</p>

                <div className="component-title"><h1><strong>Results</strong></h1></div>                

                <div className="date-picker">
                    <h1><strong>Date</strong></h1>
                    <i className='fas fa-caret-left' onClick={(e)=>this.decreaseDate(e)}></i>
                    <div className="date-field"><h3>{this.dateOptions[0]}</h3></div>                    
                    <i className='fas fa-caret-right' onClick={(e)=>this.increaseDate(e)}></i>
                </div>
                <Overview />                                
            </div>                 
        );
    }
}

export default Results;