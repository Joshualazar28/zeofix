import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";
import javascript from "../../images/TechLogo/frontend-icon3.svg"
const Services3 = () => {
  console.log(javascript, 'javascript')
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Services
              </h6> */}
              <h3 className="wow color-font">

                Services We Offer
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-4 mt-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Mobile  Development</h5>


            </div>
          </div>

          <div className="col-lg-4 mt-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Mobile  Development</h5>


            </div>
          </div>
          <div className="col-lg-4 mt-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>UI/UX Development</h5>



            </div>
          </div>
          <div className="col-lg-4 mt-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>DevOps & Cloud</h5>
      

            
 







            </div>
          </div>



          <div className="col-lg-4 mt-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>AI & ML</h5>
              
            </div>
          </div>
          <div className="col-lg-4 mt-4 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Custom Software Development</h5>
              



            </div>
          </div>






        </div>
      </div>
    </section>
  );
};

export default Services3;
