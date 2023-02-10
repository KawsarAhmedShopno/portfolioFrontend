import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <main>
          <div className="about-me ">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="about-me-img mb-30">
                    <img src="assets/img/gallery/aboutme.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className="about-me-caption">
                    <h2>I Create Products Not Just Art.</h2>
                    <p className="pb-30">
                      Unlimited rewards. enjoy attractive discounts flexible
                      Payme options global usage. Unlimited rewards. enjoy
                      attracti exible ayment options global usage.
                    </p>
                    <h5>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </h5>
                    <p>
                      Unlimited rewards. enjoy attractive discounts flexible
                      Payme options global usage. Unlimited rewards. enjoy
                      attracti exible ayment options global usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="contact-info-area w-padding bg-info"
            data-background="assets/img/gallery/section_bg04.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7">
                  <div className="contact-caption ">
                    <h3>If Not Now, When? Let’s Work Together!</h3>
                    <p>
                      Consectetur adipiscing elit, sed do eiusmod tempor ididunt
                      ut labore et dolore magna aliqua. Quis ipsum suspendisces
                      gravida. Risus commodo viverra.
                    </p>
                    <img src="assets/img/gallery/sin.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="wantToWork-area w-padding2">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-8 col-md-8">
                  <div className="wantToWork-caption wantToWork-caption2">
                    <h2>Dont worry for contact i`m available</h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <a href="#" className="btn btn-black f-right">
                    Contact Me Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default About;
