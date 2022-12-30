
import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonial from '../../components/Testimonial/Testimonial';


function Home() {
  return (
    <div className="mt-10 h-[100%] relative">
      <Testimonial />
      <Newsletter />
    </div>
  );
}
export default Home;

