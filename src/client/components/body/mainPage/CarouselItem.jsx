
import React , {PureComponent} from 'react';
import { Redirect} from 'react-router-dom'

// function CarouselItem(props) {
class CarouselItem extends PureComponent {
    state = {
        redirect: false
    }
    
       

    setRedirect = () => {
        this.setState({
            redirect: true
        })
        window.scrollTo(0,0)
    }

    renderRedirect = (url) => {
        if (this.state.redirect == true) {
            return <Redirect to={url} />
        }
      
    }


    render() {
        return (
            <div>
                {this.renderRedirect(this.props.url)}
                <img 
                    // id = {props.key}
                    className = "carouselItem"
                    src = {this.props.imageUrl}
                    alt = "First slide"
                    // onClick={this.setRedirect}
                />
                <div className="SportItemCaption d-flex align-items-center justify-content-center" onClick={this.setRedirect}>
                        {this.props.title}
                </div>
                
            

            </div>
        );
    }
        

}
 
export default CarouselItem;