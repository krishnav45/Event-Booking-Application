import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/e75a7beabed2a5b0c0d9f7a8c6aa6caf1eea1338.png",
  "/b75997e681d0c46ef7dc1a6e5e0f26f3712c1a47.png",
  "/e75a7beabed2a5b0c0d9f7a8c6aa6caf1eea1338.png",
  "/b75997e681d0c46ef7dc1a6e5e0f26f3712c1a47.png",
  "/e75a7beabed2a5b0c0d9f7a8c6aa6caf1eea1338.png",
];

const Carousel = () => {
  return (
    <div className="outer-course-container">
      <div className="inner-course-container">

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={12}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="course-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="course-card">
                <img
                  src={src}
                  alt={`course-${index}`}
                  className="course-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Carousel;
