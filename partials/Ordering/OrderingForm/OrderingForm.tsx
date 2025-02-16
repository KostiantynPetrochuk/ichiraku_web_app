import { OrderingDeliveryCheckbox, OrderingInputText } from "..";
import OrderingPayment from "../OrderingPayment/OrderingPayment";
import OrderingInputNumber from "../OrderingInputNumber";

import "./styles.scss";

const OrderingForm = (props: any) => {
  const { formData, handleChange, validations, handleChangeValidation } = props;
  return (
    <form className="basket-ordering-form">
      <OrderingInputText
        name={"firstName"}
        inputName="Прізвище"
        inputClassName="firstname"
        value={formData.firstName}
        setValue={handleChange}
        isInputValid={validations.firstName}
        setIsInputValid={handleChangeValidation}
      />
      <OrderingInputText
        name={"lastName"}
        inputName="Ім'я"
        inputClassName="lastname"
        value={formData.lastName}
        setValue={handleChange}
        isInputValid={validations.lastName}
        setIsInputValid={handleChangeValidation}
      />
      <OrderingInputText
        name={"surrName"}
        inputName="По батькові"
        inputClassName="surrname"
        value={formData.surrName}
        setValue={handleChange}
        isInputValid={validations.surrName}
        setIsInputValid={handleChangeValidation}
      />
      <OrderingInputNumber
        name="phone"
        inputName="Телефон"
        inputClassName="phone"
        value={formData.phone}
        min={10}
        setValue={handleChange}
        isInputValid={validations.phone}
        setIsInputValid={handleChangeValidation}
      />
      <OrderingDeliveryCheckbox
        name={"delivery"}
        delivery={formData.delivery}
        setDelivery={handleChange}
      />
      <OrderingInputText
        name={"address"}
        inputName="Адреса доставки"
        inputClassName="address"
        value={formData.address}
        setValue={handleChange}
        hidden={!formData.delivery}
        min={10}
        isInputValid={validations.address}
        setIsInputValid={handleChangeValidation}
      />
      <OrderingInputText
        name={"deliveryTime"}
        inputName="Час доставки"
        inputClassName="time"
        value={formData.deliveryTime}
        setValue={handleChange}
        hidden={!formData.delivery}
        isInputValid={validations.deliveryTime}
        setIsInputValid={handleChangeValidation}
      />
      <OrderingPayment
        name={"paymentMethod"}
        paymentMethod={formData.paymentMethod}
        setPaymentMethod={handleChange}
      />
    </form>
  );
};

export default OrderingForm;
