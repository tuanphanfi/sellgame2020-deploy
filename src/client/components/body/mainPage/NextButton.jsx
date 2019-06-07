import React from 'react';

function NextButton(props) {
    return ( 
            <div className="col-lg-1 buttonContainer d-flex align-items-center justify-content-center" onClick={props.nextPage}>
                <img 
                    className = "nextCarouselButton align-middle"
                    src = {"./src/client/img/right-arrow.png"}
                    />
            </div>
    );
}
 
export default NextButton;