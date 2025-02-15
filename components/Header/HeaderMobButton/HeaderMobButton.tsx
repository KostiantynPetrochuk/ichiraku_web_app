import Link from "next/link";
import { useAppSelector } from "../../../hooks";
import "./styles.scss";

const HeaderMobButton = (props: { handleMenuButtonClick: () => void }) => {
  const { handleMenuButtonClick } = props;
  const customsList = useAppSelector((state) => state.customs.list);

  const countOfDishes = customsList.reduce((a, b) => a + b.count, 0);

  return (
    <div className="mob-basket-btn-inner" onClick={handleMenuButtonClick}>
      <span className="mob-basket__number">044 26 56 987</span>
      <Link href={"/basket"} className="mob-basket__btn">
        <span className="mob-basket__info">Кошик</span>
        <span className="mob-basket__count">{countOfDishes}</span>
      </Link>
    </div>
  );
};

export default HeaderMobButton;
