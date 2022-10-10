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
        {/* <div className=" h-1/2 w-1/2 wavulogo "> sadsadas</div> */}
      </h3>
      <p className="text-center py-3 font-semibold text-2xl"> Rules we abide by when serving our clients
      </p>
      {/* <div className="absolute top-14 left-2 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 left-60 w-60 h-60 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
      <<div className="absolute top-1/3 right-10 w-60 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-7 right-60 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
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
