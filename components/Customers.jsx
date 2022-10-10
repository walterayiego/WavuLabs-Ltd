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
      <p className="text-center py-3 font-semibold text-2xl"> 
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
            <h2>Sam Walton</h2>
            
          </div>
          <div className="text-center" data-swiper-parallax="-100">
            <p>
              There is only one boss. The customer. And he can fire everybody in
              the company from the chairman on down, simply by spending his
              money somewhere else.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" grid justify-between  text-center">
          <div className="title text-center" data-swiper-parallax="-300">
          </div>
          <div className="subtitle text-center" data-swiper-parallax="-200">
            <h2>Shep Hyken</h2>
          </div>
          <div className="text-center" data-swiper-parallax="-100">
            <p>
              The key is when a customer walks away, thinking, &apos;Wow, I love
              doing business with them, and I want to tell others about the
              experience.&apos;.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" grid justify-between  text-center">
          <div className="title text-center" data-swiper-parallax="-300">
          </div>
          <div className="subtitle text-center" data-swiper-parallax="-200">
          <h2>Maya Angelou</h2> 
          </div>
          <div className="text-center" data-swiper-parallax="-100">
            <p>
              People will forget what you said. They will forget what you did.
              But they will never forget how you made them feel.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Customers;
