import React from "react";
import dev from "../Assets/images/dev.gif";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <>
      <div className="section home-sec" id="header">
        <div className="container pt-6 mt-6 pb-6 mobile-header">
          <div className="hero is-fullheight pt-6">
            <div className="columns pt-6">
              <div
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="column pt-6 mt-6"
              >
                <h3
                  className="is-size-4 is-size-6-mobile"
                  style={{ color: "white" }}
                >
                  Hi There!👩
                </h3>
                <p
                  className="is-size-2-desktop has-text-weight-bold is-size-4-mobile"
                  style={{ color: "white" }}
                >
                  {" "}
                  I'm{" "}
                  <span style={{ color: "rgba(105, 47, 47, 0.883)" }}>
                    Ichrak Ben Asker.
                  </span>
                </p>
                <p
                  className="is-size-3 is-size-5-mobile"
                  style={{ color: "white" }}
                >
                  Junior Full Stack developer | Tech Enthusiast
                </p>
                <div className="pt-5">
                  <Link to="about" spy={true} smooth={true}>
                    <button id="btn" className="button is-size-5 is-size-7-mobile">
                      Know more
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="column home-img"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                
                   <img src={dev} alt="about" className="gif" />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;