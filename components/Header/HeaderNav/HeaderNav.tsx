import HeaderNavLink from "../HeaderNavLink";
import { DISH_CATEGORIES } from "../../../constants/dishCategories";

import "./styles.scss";

const HeaderNav = () => {
  const navLinks = DISH_CATEGORIES.map((category) => {
    const { _id, logoPath, name, slug } = category;
    return (
      <HeaderNavLink
        key={_id}
        logoPath={logoPath}
        categoryName={name}
        slug={slug}
      />
    );
  });

  return (
    <nav className="header-bot-menu">
      <ul className="header-bot-menu-list">{navLinks}</ul>
    </nav>
  );
};

export default HeaderNav;
