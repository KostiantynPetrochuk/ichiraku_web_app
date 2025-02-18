"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import BasketButton from "./BasketButton";
import HeaderInfo from "./HeaderInfo";
import HeaderMob from "./HeaderMob";
import HeaderNav from "./HeaderNav";
import MobMenu from "./MobMenu";
import OrderCallButton from "./OrderCallButton";
import OrderPhone from "./OrderPhone";

import "./styles.scss";

const Header = () => {
  const [mobMenuState, setMobMenuState] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsVisible(true);
        return;
      }
      setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <MobMenu mobMenuState={mobMenuState} setMobMenuState={setMobMenuState} />
      <div className="container">
        <div className="header-top">
          <div className="header-top-left">
            <div className="header-logo-inner">
              <Link href={"/"}>
                <img
                  className="header-logo__img"
                  src={"/img/logo.jpg"}
                  alt={""}
                />
              </Link>
            </div>
            <HeaderInfo city={"Хмельницький"} deliveryTime={"30"} />
          </div>
          <div className="header-top-right">
            <OrderCallButton addClassName={"header-top-right__button"} />
            <OrderPhone phone={"044 65 98 658"} />
          </div>
        </div>
        <div className="header-bot-inner">
          <div className="header-bot">
            <HeaderNav />
            <BasketButton />
          </div>
        </div>
        <div className={`header-bot-fixed${isVisible ? " __show" : ""}`}>
          <div className="container">
            <div className="header-bot">
              <HeaderNav />
              <BasketButton />
            </div>
          </div>
        </div>
        <HeaderMob
          mobMenuState={mobMenuState}
          setMobMenuState={setMobMenuState}
        />
        <div className={`header-mob-fixed${isVisible ? " __show" : ""}`}>
          <div className="container">
            <HeaderMob
              mobMenuState={mobMenuState}
              setMobMenuState={setMobMenuState}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
