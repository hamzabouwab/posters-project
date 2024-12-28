import Articles from "./articles/Articles";
import Gift from "./Gift/Gift";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

function Main() {
  return (
    <div className="main">
      <Hero />
      <Articles />
      <hr />
      <Testimonials />
      <Gift />
      <Services />
    </div>
  );
}

export default Main;
