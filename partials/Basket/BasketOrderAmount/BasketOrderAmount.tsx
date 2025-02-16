"use client";
import { useAppSelector } from "@/hooks";

import "./styles.scss";

const BasketOrderAmount = () => {
  const customsList = useAppSelector((state) => state.customs.list);
  const amount = customsList.reduce((a, b) => {
    const currentItemPrice = b.count * b.dish.price;
    return a + currentItemPrice;
  }, 0);

  return (
    <div className="basket-total-amount">
      <h3 className="basket-total-amount__title">Сума замовлення:</h3>
      <span className="basket-total-amount__count">{amount}грн</span>
    </div>
  );
};

export default BasketOrderAmount;
