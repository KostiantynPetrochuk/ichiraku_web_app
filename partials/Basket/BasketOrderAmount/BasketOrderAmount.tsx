import "./styles.scss";

const BasketOrderAmount = (props: { amount: number }) => {
  const { amount } = props;

  return (
    <div className="basket-total-amount">
      <h3 className="basket-total-amount__title">Сума замовлення:</h3>
      <span className="basket-total-amount__count">{amount}грн</span>
    </div>
  );
};

export default BasketOrderAmount;
