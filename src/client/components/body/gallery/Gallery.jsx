import React, { PureComponent } from 'react';
// import MainNews from '../mainPage/MainNews';
// import TopNews from '../mainPage/TopNews';

class Gallery extends PureComponent {
    state = {}

    

    render() {
        return (
                <div className="gallery">
                    <a href="home">
                        <h4>Home</h4>
                    </a> <h4>></h4>
                    <a href="gallery">
                        <h4>Gallery</h4>
                        </a>
                    <h1>Gallery</h1>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>
                    <div className="galary-container"><img className="gallery-img" src={'./src/client/img/sellgames-football.png'} /></div>

                </div>
        );
    }
}

export default Gallery;
