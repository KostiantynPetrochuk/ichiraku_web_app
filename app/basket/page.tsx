"use client";
import { useEffect, useState } from "react";

import BreadCrumbs from "../../components/BreadCrumbs";
import OrderingButtons from "../../components/OrderingButtons";
import OrderingSteps from "../../components/OrderingSteps";
import Spinner from "../../components/Spinner";
import BasketMessage from "../../partials/Basket/BasketMessage/BasketMessage";
import {
  BasketCustoms,
  BasketOrderAmount,
  BasketSauces,
} from "../../partials/Basket";

import { useAppSelector } from "../../hooks";

const Basket = () => {
  const [sauces, setSauces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const customsList = useAppSelector((state) => state.customs.list);

  const orderAmount = customsList.reduce((a, b) => {
    const currentItemPrice = b.count * b.dish.price;
    return a + currentItemPrice;
  }, 0);

  return loading ? (
    <Spinner />
  ) : (
    <main className="main">
      <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: "/", name: "Кошик" },
        ]}
      />
      <section className="basket">
        <div className="container">
          <div className="basket-inner">
            <OrderingSteps index={1} />
            {orderAmount ? (
              <BasketCustoms customsList={customsList} />
            ) : (
              <BasketMessage />
            )}
            <BasketSauces sauces={sauces} customsList={customsList} />
            <BasketOrderAmount amount={orderAmount} />
            <OrderingButtons handleShowOrder={null} nextBtnType={null} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Basket;
