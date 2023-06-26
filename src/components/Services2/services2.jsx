import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 p-0 col-md-10">
            <div className="sec-head  text-center">

              <h3 className="wow color-font">
                Partnership Models

              </h3>
              <p>  Zeofix Technologies a leading mobile app development company in USA, Finland & Pakistan offers custom app development services to wide range of industries and businesses. Know more about our partnership models.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop p-3">
              <span className="icon pe-7s-gleam"></span>
              <h6>Fixed Price Model
              </h6>
              <p>
                In this model, the project scope of work is established before development begins, along with the cost and timetable that go along with it. This type is suitable for prolonged interaction. The client is always at ease knowing that the project will stay within the predetermined budget. Customers that have a clear understanding of their needs will benefit from this model the most.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor p-3">
              <span className="icon pe-7s-phone"></span>
              <h6>Hire Dedicated Model</h6>
              <p>
                Clients pay the app developer according to the number of hours they put into the project in this very traditional and straightforward method of engagement. Customers can readily begin the project because they are not required to arrive with precise requirements. Additionally, this model enables clients to add new features whenever they want and lets them know exactly what they're purchasing. This promotes far more dialogue and trust.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom p-3">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>On Site Development Model</h6>
              <p>
                When clients desire additional temporary resources for on-site development, this option is ideal. This sort of contract guarantees a cost-effective engagement and in-person interactions with engineers. Due to constant contact throughout the entire process, this model aids in meeting the deadline on time.
              </p>
            </div>
          </div>
        </div>
        <div className="smore">
          <Link href="/about/about-dark">
            <a>Discover More</a>
          </Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="line top left"></div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services2;
