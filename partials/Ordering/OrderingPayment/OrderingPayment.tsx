import "./styles.scss";

type OrderingPaymentProps = {
  paymentMethod: boolean;
  setPaymentMethod: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderingPayment = (props: OrderingPaymentProps) => {
  const { paymentMethod, setPaymentMethod } = props;

  return (
    <div className="basket-ordering-payment">
      <span className="basket-ordering-payment__title">Спосіб оплати</span>
      <label className="basket-ordering-payment-item">
        <input
          className="basket-ordering-payment-real-radio"
          type="radio"
          name="payment"
          id=""
          checked={paymentMethod}
          onChange={() => setPaymentMethod(true)}
        />
        <span className="basket-ordering-payment-fake-radio"></span>
        <img
          className="basket-ordering-payment__logo"
          src="img/credit-card.svg"
          alt=""
        />
        <span className="basket-ordering-payment-item__subtitle">Картка</span>
      </label>
      <label className="basket-ordering-payment-item">
        <input
          className="basket-ordering-payment-real-radio"
          type="radio"
          name="payment"
          id=""
          checked={!paymentMethod}
          onChange={() => setPaymentMethod(false)}
        />
        <span className="basket-ordering-payment-fake-radio"></span>
        <img
          className="basket-ordering-payment__logo"
          src="/img/cash.svg"
          alt=""
        />
        <span className="basket-ordering-payment-item__subtitle">Готівка</span>
      </label>
    </div>
  );
};

export default OrderingPayment;
