import BreadCrumbs from "../../components/BreadCrumbs";
import OrderingButtons from "../../components/OrderingButtons";
import OrderingSteps from "../../components/OrderingSteps";
import {
  BasketOrderAmount,
  BasketBody,
} from "../../partials/Basket";
import getDishesByCategory from "@/api/getDishesByCategory";

const Basket = async () => {
  const sauces = await getDishesByCategory("sauce");

  return (
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
            <BasketBody />
            <BasketOrderAmount />
            <OrderingButtons handleShowOrder={null} nextBtnType={null} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Basket;
