"use client";
import BasketCustoms from "../BasketCustoms";
import BasketMessage from "../BasketMessage";
import { useAppSelector } from "@/hooks";

const BasketBody = () => {
  const customsList = useAppSelector((state) => state.customs.list);
  const orderAmount = customsList.reduce((a, b) => {
    const currentItemPrice = b.count * b.dish.price;
    return a + currentItemPrice;
  }, 0);

  return orderAmount ? (
    <BasketCustoms customsList={customsList} />
  ) : (
    <BasketMessage />
  );
};

export default BasketBody;
