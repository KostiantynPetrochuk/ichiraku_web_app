import {
  DISH_CATEGORIES,
  DishCategory,
} from "../../../constants/dishCategories";
import HeaderMobButton from "../HeaderMobButton/HeaderMobButton";
import HeaderMobLink from "../HeaderMobLink";

import "./styles.scss";

type MobMenuPropsType = {
  mobMenuState: boolean;
  setMobMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobMenu = (props: MobMenuPropsType) => {
  const { mobMenuState, setMobMenuState } = props;

  const handleMenuButtonClick = (): void => {
    mobMenuState ? setMobMenuState(false) : setMobMenuState(true);
  };

  const mobLinks: any[] = DISH_CATEGORIES.map((category: DishCategory) => {
    const { _id, name, slug } = category;

    return (
      <HeaderMobLink
        key={_id}
        categoryName={name}
        slug={slug}
        handleMenuButtonClick={handleMenuButtonClick}
      />
    );
  });

  return (
    <div
      className={`header-mob-menu${mobMenuState ? " visible" : ""}`}
      id="mob_menu"
    >
      <img
        className="header-mob-menu__logo"
        src={"/img/logo_mob.jpg"}
        alt={""}
      />
      <ul className="header-mob-menu-list">{mobLinks}</ul>
      <HeaderMobButton handleMenuButtonClick={handleMenuButtonClick} />
    </div>
  );
};

export default MobMenu;
