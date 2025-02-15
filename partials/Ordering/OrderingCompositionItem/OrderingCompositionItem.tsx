import "./styles.scss";

type OrderingCompositionItemPropsType = {
  name: string;
  price: number;
  count: number;
};

const OrderingCompositionItem = (props: OrderingCompositionItemPropsType) => {
  const { name, price, count } = props;

  return (
    <li className="basket-ordering-composition-list-item">
      <span className="basket-ordering-composition-list-item__name">
        {name}
      </span>
      <span className="basket-ordering-composition-list-item__price">
        {price}грн
      </span>
      <span className="basket-ordering-composition-list-item__count">
        х{count}
      </span>
      <span className="basket-ordering-composition-list-item__total-price">
        {price * count}грн
      </span>
    </li>
  );
};

export default OrderingCompositionItem;
