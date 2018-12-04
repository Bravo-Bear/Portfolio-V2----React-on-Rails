import React, { Component } from 'react';
import Carosel from './Carousel'


class Main extends Component {
  render() {
    return (
      <div className='motherbox'>
        <div className="box2">
          <h1> Eduard Fernandez</h1>
          <p>Making things happen</p>
        </div>

        <div className='box3'>
          <div className="header">
            <div>
              <h1>About Me</h1>
              <p>As a customer service rep at an electric company I've had my fair share of bright ideas, one of the most important was to follow my passion for computer programming and website development. After passing the Wyncode Boot camp I'm proud to say I'm a Full Stack Web Developer and I'm ready to bring some light into the Miami Tech scene.</p>
            </div>
            <div id='myFace'>
              <img src="https://i.imgur.com/WA5cuSd.jpg" alt="my face" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div className="filler1">
        </div>
        <main className='box4'>
          <Carosel />
        </main>
        <div className="filler2">
        </div>
        <footer className='box5'>

        </footer>
      </div>
    );
  }
}

export default Main;
