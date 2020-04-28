import React from 'react';

import './Header.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';

const header = (props) => (
    <Aux classes={ "Header " + props.classes }>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./img/hero-image.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1524775906432-f594cea0a926?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/smart-city_myth.jpg?itok=zCx3ac8e" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>

        <header>
            <div className="header_opening">
                <h1 className="display-1 header_opening--heading1">Namaste</h1>
                <h3 className="display-4 header_opening--heading3">Continue to World of Limitless</h3>            

                <Button>Continue</Button>
            </div>
        </header>
    </Aux>
);

export default header;