import { OrderingDeliveryCheckbox, OrderingInputText } from "..";
import OrderingPayment from "../OrderingPayment/OrderingPayment";
import OrderingInputNumber from "../OrderingInputNumber";
import { OrderingFormPropsT } from "./OrderingFormPropsT";

import "./styles.scss";

const OrderingForm = (props: OrderingFormPropsT) => {
  const {
    firstName,
    setFirstName,
    isValidFirstName,
    setIsValidFirstName,
    lastName,
    setLastName,
    isValidLastName,
    setIsValidLastName,
    surrName,
    setSurrName,
    isValidSurrName,
    setIsValidSurrName,
    phone,
    setPhone,
    isValidPhone,
    setIsValidPhone,
    delivery,
    setDelivery,
    address,
    setAddress,
    isValidAddress,
    setIsValidAddress,
    deliveryTime,
    setDeliveryTime,
    isValidDeliveryTime,
    setIsValidDeliveryTime,
    paymentMethod,
    setPaymentMethod,
  } = props;
  return (
    <form className="basket-ordering-form">
      <OrderingInputText
        inputName="Прізвище"
        inputClassName="firstname"
        value={firstName}
        setValue={setFirstName}
        isInputValid={isValidFirstName}
        setIsInputValid={setIsValidFirstName}
      />
      <OrderingInputText
        inputName="Ім'я"
        inputClassName="lastname"
        value={lastName}
        setValue={setLastName}
        isInputValid={isValidLastName}
        setIsInputValid={setIsValidLastName}
      />
      <OrderingInputText
        inputName="По батькові"
        inputClassName="surrname"
        value={surrName}
        setValue={setSurrName}
        isInputValid={isValidSurrName}
        setIsInputValid={setIsValidSurrName}
      />
      <OrderingInputNumber
        inputName="Телефон"
        inputClassName="phone"
        value={phone}
        min={10}
        setValue={setPhone}
        isInputValid={isValidPhone}
        setIsInputValid={setIsValidPhone}
      />
      <OrderingDeliveryCheckbox delivery={delivery} setDelivery={setDelivery} />
      <OrderingInputText
        inputName="Адреса доставки"
        inputClassName="address"
        value={address}
        setValue={setAddress}
        hidden={!delivery}
        min={10}
        isInputValid={isValidAddress}
        setIsInputValid={setIsValidAddress}
      />
      <OrderingInputText
        inputName="Час доставки"
        inputClassName="time"
        value={deliveryTime}
        setValue={setDeliveryTime}
        hidden={!delivery}
        isInputValid={isValidDeliveryTime}
        setIsInputValid={setIsValidDeliveryTime}
      />
      <OrderingPayment
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
    </form>
  );
};

export default OrderingForm;
