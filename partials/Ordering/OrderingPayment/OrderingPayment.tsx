import "./styles.scss";

type OrderingPaymentProps = {
  name: string;
  paymentMethod: boolean;
  setPaymentMethod: (value: any, name: string) => void;
};

const OrderingPayment = (props: OrderingPaymentProps) => {
  const { name, paymentMethod, setPaymentMethod } = props;

  return (
    <div className="basket-ordering-payment">
      <span className="basket-ordering-payment__title">Спосіб оплати</span>
      <label className="basket-ordering-payment-item">
        <input
          className="basket-ordering-payment-real-radio"
          type="radio"
          name={name}
          id=""
          checked={paymentMethod}
          onChange={() => setPaymentMethod(true, name)}
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
          name={name}
          id=""
          checked={!paymentMethod}
          onChange={() => setPaymentMethod(false, name)}
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
