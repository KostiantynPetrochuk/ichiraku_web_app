import { OrderingCompositionItem } from "..";

import "./styles.scss";

const OrderingComposition = (props: { customsList: any[] }) => {
  const { customsList } = props;

  const orderAmount = customsList.reduce((a, b) => {
    const currentItemPrice = b.count * b.dish.price;
    return a + currentItemPrice;
  }, 0);

  const orderingCompositionItems = customsList.map((custom) => (
    <OrderingCompositionItem
      key={custom._id}
      name={custom.dish.name}
      price={custom.dish.price}
      count={custom.count}
    />
  ));

  return (
    <div className="basket-ordering-composition">
      <h3 className="basket-ordering-composition__title">Склад замовлення</h3>
      <ul className="basket-ordering-composition-list">
        {orderingCompositionItems}
      </ul>
      <div className="basket-ordering-composition-total">
        <span className="basket-ordering-composition-total__title">
          Сума замовлення
        </span>
        <span className="basket-ordering-composition-total__amount">
          {orderAmount}&nbsp;грн
        </span>
      </div>
    </div>
  );
};

export default OrderingComposition;
