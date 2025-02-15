import Link from "next/link";

import BasketButtonDropdown from "../BasketButtonDropdown";
import { useAppSelector } from "../../../hooks";

import "./styles.scss";

const BasketButton = () => {
  const customsList = useAppSelector((state) => state.customs.list);

  const countOfDishes = customsList.reduce((a, b) => a + b.count, 0);

  return (
    <div className="header-bot-basket-button-inner">
      <Link href={"/basket"} className="header-bot-basket__button">
        <span className="header-bot-basket__info">Кошик</span>
        <span className="header-bot-basket__count">{countOfDishes}</span>
      </Link>
      <BasketButtonDropdown />
    </div>
  );
};

export default BasketButton;
