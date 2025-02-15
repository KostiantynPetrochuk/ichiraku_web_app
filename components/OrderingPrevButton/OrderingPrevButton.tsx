import Link from "next/link";

import "./styles.scss";

const OrderingPrevButton = () => {
  return (
    <Link href={"/"} className="basket-button__back">
      <span className="basket-button-back__arrow">
        <span></span>
        <span></span>
      </span>
      <span>Повернутись до магазину</span>
    </Link>
  );
};

export default OrderingPrevButton;
