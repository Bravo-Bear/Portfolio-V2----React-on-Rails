import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <div id="carousel">
        <Carousel
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          initialSlideHeight={80}
          heightMode={'max'}
        >
          <div id="header1">
            <div className="header">
              <h1>Band Together</h1>
              <p>This Porject was a cumulation of a three man team for the final project of the Wyncode Course. Winning first place on the final presentaiton day, this app was originally designed by Michael Meade and his team.</p>
            </div>
          </div>
          <div id="header2">
            <div className="header">
              <h1>Band Together</h1>
              <p>This Porject was a cumulation of a three man team for the final project of the Wyncode Course. Winning first place on the final presentaiton day, this app was originally designed by Michael Meade and his team.</p>
            </div>
          </div>
          <div id="header3">
            <div className="header">
              <h1>Band Together</h1>
              <p>This Porject was a cumulation of a three man team for the final project of the Wyncode Course. Winning first place on the final presentaiton day, this app was originally designed by Michael Meade and his team.</p>
            </div>
          </div>
        </Carousel>
      </div >
    );
  }
}