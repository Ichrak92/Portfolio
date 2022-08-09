import React from "react";
import {
  DiJavascript1,
  DiAngularSimple,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiVisualstudio,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import {SiHtml5, SiCss3 } from "react-icons/si";

function Skills() {
  return (
    <section className="section skills-sec">
      <div
        className="container"
        id="skills"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="hero is-halfheight">
          <div className="hero-body">
            <div className="columns is-0">
              <div className="column is-half">
                <h3 className="title" style={{ color: "white" }}>
                  Skills
                </h3>
                <p class="is-size-5"style={{ color: "white" }}>
                 I first started my coding journey with HTML and CSS . Then, I moved on to learn javascript. I began with React js, Node js, and Angular.
                 
                </p>
              </div>

              <div className="column is-2">
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2" id="icons">
                    <p className="content has-text-centered">
                  <SiHtml5 className="title1"/>
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2" id="icons">
                    <p className="content has-text-centered">
                    <SiCss3 className="title6" />
                    </p>
                  </article>
                </div>
              </div>

              <div className="column is-2">
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2" id="icons">
                    <p className="content has-text-centered">
                       <DiJavascript1 className="title1"/>
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2" id="icons">
                    <p className="content has-text-centered">
                      <DiReact className="title5"/>
                    </p>
                  </article>
                </div>
              </div>

              <div class="column is-2">
                <div className="tile is-parent">
                  <article class="tile is-child is-11 box tiles2" id="icons">
                    <p className="content has-text-centered">
                      <DiAngularSimple className="title3"/>
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child is-11 box tiles2" id="icons">
                    <p className="content has-text-centered">
                      <DiNodejs className="title4"/>
                    </p>
                  </article>
                </div>    
          </div>
        </div>
      </div>
     </div> 
    </div> 
    </section>
  );
}

export default Skills;