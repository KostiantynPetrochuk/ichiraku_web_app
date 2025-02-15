import React, { Dispatch, SetStateAction } from "react";
import Modal from "../../../components/Modal/Modal";

import "./styles.scss";

type OrderingModalT = {
  modalState: boolean;
  handleCloseModal: Dispatch<SetStateAction<boolean>>;
  handleSubmitOrder: () => Promise<void>;
  customsList: any[];
  firstName: string;
  lastName: string;
  surrName: string;
  phone: string;
  delivery: boolean;
  address: string;
  deliveryTime: string;
  paymentMethod: boolean;
};

const OrderingModal = (props: OrderingModalT) => {
  const {
    modalState,
    handleCloseModal,
    handleSubmitOrder,
    customsList,
    firstName,
    lastName,
    surrName,
    phone,
    delivery,
    address,
    deliveryTime,
    paymentMethod,
  } = props;

  return (
    <Modal
      isOpen={modalState}
      onClose={handleCloseModal}
      onOk={handleSubmitOrder}
    >
      <h2 className="orderingModal__title">Перевірка даних</h2>
      <div className="orderingModal-buyer-row">
        <span className="orderingModal-buyer-row__title">Прізвище:</span>
        <span className="orderingModal-buyer-row__data">
          {firstName ? firstName : "-"}
        </span>
      </div>
      <div className="orderingModal-buyer-row">
        <span className="orderingModal-buyer-row__title">Ім'я:</span>
        <span className="orderingModal-buyer-row__data">
          {lastName ? lastName : "-"}
        </span>
      </div>
      <div className="orderingModal-buyer-row">
        <span className="orderingModal-buyer-row__title">По батькові:</span>
        <span className="orderingModal-buyer-row__data">
          {surrName ? surrName : "-"}
        </span>
      </div>
      <div className="orderingModal-buyer-row">
        <span className="orderingModal-buyer-row__title">Телефон:</span>
        <span className="orderingModal-buyer-row__data">
          {phone ? phone : "-"}
        </span>
      </div>
      <div className="orderingModal-buyer-row">
        <span className="orderingModal-buyer-row__title">Доставка:</span>
        <span className="orderingModal-buyer-row__data">
          {delivery ? "Так" : "Ні"}
        </span>
      </div>

      {delivery ? (
        <>
          <div className="orderingModal-buyer-row">
            <span className="orderingModal-buyer-row__title">
              Адреса доставки:
            </span>
            <span className="orderingModal-buyer-row__data">
              {address ? address : "-"}
            </span>
          </div>
          <div className="orderingModal-buyer-row">
            <span className="orderingModal-buyer-row__title">
              Час доставки:
            </span>
            <span className="orderingModal-buyer-row__data">
              {deliveryTime ? deliveryTime : "-"}
            </span>
          </div>
          <div className="orderingModal-buyer-row">
            <span className="orderingModal-buyer-row__title">
              Спосіб оплати:
            </span>
            <span className="orderingModal-buyer-row__data">
              {paymentMethod ? "карта" : "готівка"}
            </span>
          </div>
        </>
      ) : null}

      <h3 className="orderingModal-list__title">Список замовлення</h3>
      <ul className="orderingModal-list">
        {customsList.map((customItem) => (
          <li key={customItem._id} className="orderingModal-list-item">
            <span>{customItem.dish.name}</span>
            <span>х{customItem.count}</span>
            <span>{customItem.count * customItem.dish.price} грн.</span>
          </li>
        ))}
      </ul>

      <div className="orderingModal-result">
        <h3 className="orderingModal-result__title">Разом до сплати:</h3>
        <span className="orderingModal-result__amount">
          {customsList.reduce(
            (acc, current) => current.count * current.dish.price + acc,
            0
          )}
          грн.
        </span>
      </div>
    </Modal>
  );
};

export default OrderingModal;
