/* eslint-disable @next/next/no-img-element */
import React from "react";
import ClientsData from "../../data/sections/technoglies.json";
import Split from "../Split";

const Clients = ({theme}) => {
  // var first = ClientsData.slice(0, ClientsData.length / 2);
  // var second = ClientsData.slice(9, ClientsData.length);
  return (
    <section className="clients section-padding">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
              OUR TECHNOLOGY STACK

              </h3>
              <p>The solutions we use have been proven on a wide range of successful products.
We master the current best technologies with an open eye for the future.</p>
            </div>
          </div>
        </div>
        <div className="row">
     








          <div className="col-lg-12">
            <div>
            <h4 className="wow fadeIn wow color-font mb-3" data-wow-delay=".5s">
              DataBase
              </h4>
              <div className="row bord">
                
                {ClientsData.slice(0, 10).map((item) => (
                  <div key={item.id} className="col-md-2 col-4 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".3"
                          : item.id == 2
                          ? ".6"
                          : item.id == 3
                          ? ".8"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>


          <div className="col-lg-12">
            <div>
            <h4 className="wow fadeIn wow color-font mb-3" data-wow-delay=".5s">
            Backend
              </h4>
              <div className="row bord">
                
                {ClientsData.slice(0, 10).map((item) => (
                  <div key={item.id} className="col-md-2 col-4 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".3"
                          : item.id == 2
                          ? ".6"
                          : item.id == 3
                          ? ".8"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>


          <div className="col-lg-12">
            <div>
            <h4 className="wow fadeIn wow color-font mb-3" data-wow-delay=".5s">
             Design
              </h4>
              <div className="row bord">
                
                {ClientsData.slice(0, 10).map((item) => (
                  <div key={item.id} className="col-md-2 col-4 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".3"
                          : item.id == 2
                          ? ".6"
                          : item.id == 3
                          ? ".8"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>


          <div className="col-lg-12">
            <div>
            <h4 className="wow fadeIn wow color-font mb-3" data-wow-delay=".5s">
             Integrations
              </h4>
              <div className="row bord">
                
                {ClientsData.slice(0, 10).map((item) => (
                  <div key={item.id} className="col-md-2 col-4 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".3"
                          : item.id == 2
                          ? ".6"
                          : item.id == 3
                          ? ".8"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>



          <div className="col-lg-12">
            <div>
            <h4 className="wow fadeIn wow color-font mb-3" data-wow-delay=".5s">
             Testing
              </h4>
              <div className="row bord">
                
                {ClientsData.slice(0, 10).map((item) => (
                  <div key={item.id} className="col-md-2 col-4 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".3"
                          : item.id == 2
                          ? ".6"
                          : item.id == 3
                          ? ".8"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
