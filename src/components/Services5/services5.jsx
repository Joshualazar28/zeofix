import React from "react";
import featuresData from "../../data/sections/featuresWEcanwork.json";

const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
              Who We Work With

              </h3>
              <p>As a leading mobile app development company in USA and India, we worked with 2000+ businesses either it is a start-up or enterprise and delivers the best solution in the industry. At Zeofix Technologies , we offer a broad range of app development services based on business requirements</p>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresData.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <span className={`icon color-font ${item.icon}`}></span>
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services5;
