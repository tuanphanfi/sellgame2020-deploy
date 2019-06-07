import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'

class Title extends PureComponent  {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
        window.scrollTo(0,0)
    }

    renderRedirect = (id) => {
        if (this.state.redirect == true && id == "news") {
            return <Redirect to='/news' />
        }
        else if (this.state.redirect == true && id == "sports") {
            return <Redirect to = '/sports' />
        }
      
    }

    render () {
        return ( 
            <div className="row mainPageTitle">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    {this.renderRedirect(this.props.id)}
                    <h1 className="title" onClick = {this.setRedirect} >{this.props.title}</h1>
                </div>
                <div className="col-lg-1"></div>
            </div>
        );
    }
}
 
export default Title;