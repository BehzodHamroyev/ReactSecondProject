import React from 'react';
import './About.css';
import About1 from './About1.svg'
import About2 from './About2.svg'
import Fade from 'react-reveal/Fade';
function About() {
    return (
        <div className="container About text-white">
            <div className="row">
                <div className="col-md-6">
                    <Fade left>
                        <iframe  height="315" src="https://www.youtube.com/embed/s6elBlJYUv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Fade>
                </div>

                <Fade right>
                    <div className="col-md-6  ">
                        <p className="fw-bold ml-5">Most trusted in our field</p>
                        <p className="ml-5">Most calendars are designed for teams. Slate
                            is designed for freelancers who want a
                            simple way to plan their schedule.</p>
                        <p className="d-flex ml-5"><img src={About1}
                            className="mr-4"
                            alt="" />the quick fox jumps over the lazy
                            dog</p>
                        <p className="d-flex ml-5"><img className="mr-4"
                            src={About2}
                            alt="" />the quick fox jumps over the lazy
                            dog</p>

                    </div>
                </Fade>
            </div>
        </div>
    )


}
export default About;
