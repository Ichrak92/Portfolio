import React from "react";
import caryaah from "../../src/Assets/caryaah.jpg";
import blog from "../../src/Assets/blog.png";
import bcc from "../../src/Assets/bcc.png";
function Projects() {
  return (
    <>
      <section className="section project-sec" id="projects">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="hero is-halfheight">
            <p

              className="has-text-centered has-text-weight-bold is-size-4-desktop pb-6"
              style={{ color: "white" }}
            >
              PROJECTS / FEATURED PROJECTS
            </p>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box tiles">
                  <p id="title" className="title is-size-5-mobile">BCC APP</p>
                  <div className="content">
                  <img className="images" src={bcc} alt="bcc1" />
                    <p>
                      
                    It is an application for a call center to organize these appointments after confirmation of a client and the follow-up of personal performance by appointment.
                    </p>
                  </div>
                  <button className="button">
                    <a
                     
                      href="https://github.com/Ichrak92/BCC-App/"
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                  </button>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box tiles">
                  <p className="title is-size-5-mobile">CarYaah</p>
                  <div className="content">
                  <img className="images" src={caryaah} alt="car" />
                    <p>
                    Renting a car never been easier with Car Yeah with the click of a button you can choose a car from the already list of post cards indicated cars available in the date you already put and payment online with full safety transaction that Car Yaah Team assures.
                    <br/>
                    
                    </p>
                  </div>
                  <button className="button">
                    <a
                     
                      href="https://github.com/Ichrak92/CarYaah"
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                    {/* View Project1 */}
                  </button>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box tiles">
                  <p className="title is-size-5-mobile"> Travelling discovering</p>
                  <div className="content">
                  <img className="images" src={blog} alt="blogs" />
                    <p>
                    For bloggers this is the place to share your travel or discovering new places story. The idea behind this project is to bring experiences from your experiences to our platform. Where people read to have fun and get inspired where to go next holiday.
                    </p>
                  </div>
                  <button className="button">
                    <a
                      href="https://github.com/Ichrak92/Travelling-discovering/"
                      style={{ color: "white" }}
                    >
                      View
                    </a>
                  </button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;