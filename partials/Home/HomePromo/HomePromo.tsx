"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

const HomePromo = () => {
  return (
    <section className="promo">
      <div className="container">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={"/img/promo/promo_1.jpeg"} alt={""} />
            <div className="promo-info">
              <span className="promo-title">Dish of the Week – 20% Off</span>
              <span className="promo-text">
                Grab 20% off on this week’s special!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/img/promo/promo_2.jpeg"} alt={""} />
            <div className="promo-info">
              <span className="promo-title">
                Free Delivery for $500+ Orders
              </span>
              <span className="promo-text">
                Enjoy free delivery on orders over $500!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/img/promo/promo_3.jpeg"} alt={""} />
            <div className="promo-info">
              <span className="promo-title">Cashback for Registered Users</span>
              <span className="promo-text">
                Earn cashback with every order as a member!
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/img/promo/promo_4.jpeg"} alt={""} />
            <div className="promo-info">
              <span className="promo-title">Pickup Discount – Save 5%</span>
              <span className="promo-text">
                Get 5% off when you pick up your order!
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomePromo;
