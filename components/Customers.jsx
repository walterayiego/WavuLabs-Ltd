import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SwiperCore, {
  Parallax,
  Pagination,
  Thumbs,
  Autoplay,
  Navigation,
} from "swiper";

SwiperCore.use([Thumbs]);

const Customers = () => {
  return (
    <div id="Customers" className="relative h-fit py-4">
      <h3 className="text-center py-9 font-bold text-2xl headings">
        What we promise
      </h3>
      <p className="text-center py-2 font-semibold text-2xl"> 
        How we serve our clients
      </p>

      <Swiper
        style={{
          "--swiper-navigation-color": "#666",
          "--swiper-pagination-color": "#666",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        // effect="fade"
        modules={[Parallax, Pagination, Navigation, Thumbs, Autoplay]}
        className="mySwiper relative max-h-full"
      >
        <div
          slot="container-start"
          className=" absolute parallax-bg bg-[url('../public/assets/about.jpg')]"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className=" grid justify-between  text-center">
          <div className="title text-center" data-swiper-parallax="-300">
          </div>
          <div className="subtitle text-center" data-swiper-parallax="-200">
            <h2>Customer Satisfaction</h2>
            
          </div>
          <div className="text-center" data-swiper-parallax="-100">
            <p>
            We will always prioritize customer satisfaction 
            and work closely with you to understand and meet your specific needs.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" grid justify-between  text-center">
          <div className="title text-center" data-swiper-parallax="-300">
          </div>
          <div className="subtitle text-center" data-swiper-parallax="-200">
            <h2>Quality Service</h2>
          </div>
          <div className="text-center" data-swiper-parallax="-100">
            <p>
            Our team of experienced developers will use the latest technologies 
            and best practices to deliver high-quality, reliable software that meets your requirements.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" grid justify-between  text-center">
          <div className="title text-center" data-swiper-parallax="-300">
          </div>
          <div className="subtitle text-center" data-swiper-parallax="-200">
          <h2>Customer Commitment</h2> 
          </div>
          <div className="text-center" data-swiper-parallax="-100">
            <p>
            We will be dedicated to building long-term, positive relationships with our customers, 
            and we will always be available to answer any questions or concerns you may have.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Customers;
