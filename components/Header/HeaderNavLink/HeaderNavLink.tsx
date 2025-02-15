import Link from "next/link";

import "./styles.scss";

type HeaderNavLinkPropsType = {
  logoPath: string;
  categoryName: string;
  slug: string;
};

const HeaderNavLink = (props: HeaderNavLinkPropsType) => {
  const { logoPath, categoryName, slug } = props;

  return (
    <li className="header-bot-menu-list-item">
      <Link
        href={`/category/${slug}`}
        className="header-bot-menu-list-item__link"
      >
        <img src={logoPath} alt={""} />
        <span>{categoryName}</span>
      </Link>
    </li>
  );
};

export default HeaderNavLink;
