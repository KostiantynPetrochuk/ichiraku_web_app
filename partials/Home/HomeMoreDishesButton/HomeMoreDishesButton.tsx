import Link from "next/link";

import "./styles.scss";

const HomeMoreDishesButton = (props: { slug: string }) => {
  const { slug } = props;

  return (
    <div className="dishes-list-button-inner">
      <Link href={`/category/${slug}`} className="dishes-list__button">
        Переглянути всі
      </Link>
    </div>
  );
};

export default HomeMoreDishesButton;
