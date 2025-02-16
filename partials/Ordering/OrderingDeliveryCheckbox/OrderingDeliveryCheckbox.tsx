import "./styles.scss";

type OrderingDeliveryCheckboxProps = {
  name: string;
  delivery: boolean;
  setDelivery: (value: boolean, name: string) => void;
};

const OrderingDeliveryCheckbox = (props: OrderingDeliveryCheckboxProps) => {
  const { name, delivery, setDelivery } = props;

  const handleChangeDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery(event.target.checked, name);
  };

  return (
    <label className="basket-ordering-delivery">
      <span className="basket-ordering-input__name">Доставка</span>
      <input
        className="basket-ordering-delivery-real-checkbox"
        type="checkbox"
        name={name}
        id=""
        checked={delivery}
        onChange={handleChangeDelivery}
      />
      <span className="basket-ordering-delivery-fake-checkbox"></span>
    </label>
  );
};

export default OrderingDeliveryCheckbox;
