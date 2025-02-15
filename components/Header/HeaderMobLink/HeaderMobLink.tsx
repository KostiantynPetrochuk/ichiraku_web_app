import Link from "next/link";

import "./styles.scss";

type HeaderMobLinkPropsType = {
  categoryName: string;
  slug: string;
  handleMenuButtonClick: () => void;
};

const HeaderMobLink = (props: HeaderMobLinkPropsType) => {
  const { categoryName, slug, handleMenuButtonClick } = props;

  return (
    <li className="header-mob-menu-list-item">
      <Link
        href={`/category/${slug}`}
        className="header-mob-menu-list-item__link"
        onClick={handleMenuButtonClick}
      >
        <span>{categoryName}</span>
      </Link>
    </li>
  );
};

export default HeaderMobLink;
