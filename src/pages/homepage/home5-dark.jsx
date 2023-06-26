import React from "react";
import Navbar from "../../components/Navbar/navbar";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import Team from "../../components/Team/team";
import DarkTheme from "../../layouts/Dark";
import Works3 from "../../components/Works3/works3";
import Blogs4 from "../../components/blogs/Blogs4/blogs4";
import Intro4 from "../../components/Intro4/intro4";
import AboutUs3 from "../../components/About-us3/about-us3";
import AboutUs2 from "../../components/About-us2/about-us2";
import Services from "../../components/Services/services";
import Process from "../../components/Services4/process";
import Services4 from "../../components/Services4/services4";
import Services2 from "../../components/Services2/services2";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";
import Clients from "../../components/Clients/clients";
import Technoligies from "../../components/Clients/technoligies";
import Services5 from "../../components/Services5/services5";
const Homepage5 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro4 />
      <AboutUs2 />
      <Services4 serviceMB50 />
      <Services/>
     
    
      <Services2 style="4item" />
      {/* <Technoligies/> */}
      <Clients/>
      <Works3 />
      <Services5/>
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs4 />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage5;
