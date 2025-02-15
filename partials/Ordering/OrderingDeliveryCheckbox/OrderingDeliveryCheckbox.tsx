import "./styles.scss";

type OrderingDeliveryCheckboxProps = {
  delivery: boolean;
  setDelivery: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderingDeliveryCheckbox = (props: OrderingDeliveryCheckboxProps) => {
  const { delivery, setDelivery } = props;

  const handleChangeDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery(event.target.checked);
  };

  return (
    <label className="basket-ordering-delivery">
      <span className="basket-ordering-input__name">Доставка</span>
      <input
        className="basket-ordering-delivery-real-checkbox"
        type="checkbox"
        name=""
        id=""
        checked={delivery}
        onChange={handleChangeDelivery}
      />
      <span className="basket-ordering-delivery-fake-checkbox"></span>
    </label>
  );
};

export default OrderingDeliveryCheckbox;
