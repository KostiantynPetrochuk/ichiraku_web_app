import Link from "next/link";

import "./styles.scss";

type HomeNoveltyItemPropsType = {
  imagePath: string;
  name: string;
  price: number;
  slug: string;
};

const HomeNoveltyItem = (props: HomeNoveltyItemPropsType) => {
  const { imagePath, name, price, slug } = props;

  return (
    <li className="novelty-item">
      <img className="novelty-item__img" src={imagePath} alt={""} />
      <div className="novelty-info">
        <Link href={`/dish/${slug}`} className="novelty-link">
          {name}
        </Link>
        <span>{price}грн</span>
      </div>
    </li>
  );
};

export default HomeNoveltyItem;
