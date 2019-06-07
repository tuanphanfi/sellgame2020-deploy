import React from 'react';

function PrevButton(props) {
    return ( 
            <div className="col-lg-1 d-flex align-items-center justify-content-center" onClick={props.prevPage}>
                <img 
                    className = "prevCarouselButton"
                    src = {"./src/client/img/left-arrow.png"}
                    />
            </div>
    );
}
 
export default PrevButton;