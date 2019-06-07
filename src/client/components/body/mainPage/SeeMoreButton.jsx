import React, { PureComponent } from 'react';
import { Redirect} from 'react-router-dom'

class SeeMoreButton extends PureComponent {
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

    
    

    render() {
        return ( 
            <div className="row justify-content-md-center">
                {this.renderRedirect(this.props.id)}
                <button type="button" className="col-lg-2 seeMoreButton" onClick={this.setRedirect}>SEE MORE</button>
                
            </div>
        );
    }
    
}
 
export default SeeMoreButton;