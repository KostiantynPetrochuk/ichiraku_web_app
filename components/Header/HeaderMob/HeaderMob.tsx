import { useEffect } from "react";
import Link from "next/link";
import { useAppSelector } from "../../../hooks";

import "./styles.scss";

type HeaderMobPropsType = {
  mobMenuState: boolean;
  setMobMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMob = (props: HeaderMobPropsType) => {
  const { mobMenuState, setMobMenuState } = props;
  const customsList = useAppSelector((state) => state.customs.list);
  const countOfDishes = customsList.reduce((a, b) => a + b.count, 0);

  const handleMenuButtonClick = (): void => {
    mobMenuState ? setMobMenuState(false) : setMobMenuState(true);
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (mobMenuState) {
      body.style.overflow = "hidden";
      return;
    }
    body.style.overflow = "auto";
  }, [mobMenuState]);

  return (
    <div className="header-mob">
      <div className="header-logo-inner">
        <Link href={"/"}>
          <img className="header-logo__img" src={"/img/logo.jpg"} alt={""} />
        </Link>
      </div>

      <div className="mob-menu-inner">
        <Link className="mob-menu-basket-link" href={"/basket"}>
          <img
            className="mob-menu-basket-link__img"
            src="/img/basket.svg"
            alt=""
          />
          {countOfDishes ? (
            <span className="mob-menu-basket-link__count">{countOfDishes}</span>
          ) : null}
        </Link>
        <div
          className={`mob-menu__btn ${mobMenuState ? " visible" : ""}`}
          id="mob_menu_btn"
          onClick={handleMenuButtonClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMob;
