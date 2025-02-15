import Link from "next/link";

import "./styles.scss";

type BreadCrumbPropItem = { path: string; name: string };

const BreadCrumbs = (props: { pathes: BreadCrumbPropItem[] }): JSX.Element => {
  const { pathes } = props;

  const linksList = pathes.map((pathItem, index) => {
    if (pathes.length - 1 === index) {
      return (
        <span key={index} className="bread-crumbs__last">
          {pathItem.name}
        </span>
      );
    }

    return (
      <span key={index}>
        <Link href={pathItem.path} className="bread-crumbs__title">
          {pathItem.name}
        </Link>
        <span className="bread-crumbs__item"></span>
      </span>
    );
  });

  return (
    <section className="bread-crumbs">
      <div className="container">
        <div className="bread-crumbs-inner">{linksList}</div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
