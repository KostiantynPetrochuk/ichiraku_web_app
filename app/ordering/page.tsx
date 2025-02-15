"use client";
import { useEffect, useState } from "react";

import BreadCrumbs from "../../components/BreadCrumbs";
import OrderingButtons from "../../components/OrderingButtons";
import OrderingSteps from "../../components/OrderingSteps";
import Spinner from "../../components/Spinner";
import Notification from "../../components/Notification";
import {
  OrderingComposition,
  OrderingForm,
  OrderingModal,
} from "../../partials/Ordering";
import { useAppSelector } from "../../hooks";
import { clearBasket } from "../../store/customSlice";
import { useAppDispatch } from "../../hooks";

import "./styles.scss";

// todo: refactor page

const Ordering = () => {
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState<string>("");
  const [isValidFirstName, setIsValidFirstName] = useState<boolean>(true);
  const [lastName, setLastName] = useState<string>("");
  const [isValidLastName, setIsValidLastName] = useState<boolean>(true);
  const [surrName, setSurrName] = useState<string>("");
  const [isValidSurrName, setIsValidSurrName] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>("");
  const [isValidPhone, setIsValidPhone] = useState<boolean>(true);
  const [delivery, setDelivery] = useState<boolean>(false);

  const [address, setAddress] = useState<string>("");
  const [isValidAddress, setIsValidAddress] = useState<boolean>(true);
  const [deliveryTime, setDeliveryTime] = useState<string>("");
  const [isValidDeliveryTime, setIsValidDeliveryTime] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [showNotification, setShowNotification] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [modalState, setModalState] = useState<boolean>(false);

  const customsList: any[] = useAppSelector((state) => state.customs.list);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
  };

  const handleSubmitOrder = async (): Promise<void> => {
    setLoading(true);

    let isValid = true;

    switch (true) {
      case delivery && deliveryTime.length < 4 && address.length < 10:
        setLoading(false);
        setShowNotification(true);
        setModalState(false);
        scrollToTop();
        setIsValidAddress(false);
        setIsValidDeliveryTime(false);
        isValid = false;
        break;

      case delivery && address.length < 10:
        setLoading(false);
        setShowNotification(true);
        setModalState(false);
        scrollToTop();
        setIsValidAddress(false);
        isValid = false;
        break;

      case delivery && deliveryTime.length < 4:
        setLoading(false);
        setShowNotification(true);
        setModalState(false);
        scrollToTop();
        setIsValidDeliveryTime(false);
        isValid = false;
        break;
    }

    const formFields = [
      {
        name: "firstName",
        value: firstName,
        minLength: 3,
        isValidSetter: setIsValidFirstName,
      },
      {
        name: "lastName",
        value: lastName,
        minLength: 3,
        isValidSetter: setIsValidLastName,
      },
      {
        name: "surrName",
        value: surrName,
        minLength: 3,
        isValidSetter: setIsValidSurrName,
      },
      {
        name: "phone",
        value: phone,
        minLength: 10,
        isValidSetter: setIsValidPhone,
      },
    ];

    for (const formField of formFields) {
      if (formField.value.length < formField.minLength) {
        formField.isValidSetter(false);
        isValid = false;
      } else {
        formField.isValidSetter(true);
      }
    }

    if (!isValid) {
      setLoading(false);
      setShowNotification(true);
      setModalState(false);
      scrollToTop();
      return;
    }

    const dto = {
      firstName,
      lastName,
      surrName,
      phone: Number(phone),
      delivery,
      address,
      paymentMethod,
      deliveryTime,
      status: false,
    };

    const dtos = customsList.map((custom) => ({
      dish: custom._id,
      count: custom.count,
    }));

    const apiUrl: string = `${API_URL}`;

    const queryString: string = `${apiUrl}/api/order/create`;

    try {
      const res: Response = await fetch(queryString, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dto, dtos }),
      });

      const createdOrder = await res.json();

      if (createdOrder) {
        dispatch(clearBasket());
        setLoading(false);
        // navigate("/confirmed");
      }
    } catch (error) {
      setLoading(false);
      setModalState(false);
      setShowErrorMessage(true);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.remove("bodyOverflow-hidden");
    document.body.classList.add("bodyOverflow-auto");
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleCloseModal = () => {
    setModalState(false);
    document.body.classList.remove("bodyOverflow-hidden");
    document.body.classList.add("bodyOverflow-auto");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return loading ? (
    <Spinner />
  ) : (
    <main className="main">
      <Notification
        message="Заповніть будь ласка, всі поля форми замовлення"
        visible={showNotification}
        setVisible={setShowNotification}
      />
      <Notification
        message="Сервер не відповідає. Будь ласка, спробуйте пізніше"
        visible={showErrorMessage}
        setVisible={setShowErrorMessage}
      />
      <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: "/", name: "Оформлення замовлення" },
        ]}
      />
      <section className="basket">
        <div className="container">
          <div className="basket-inner">
            <OrderingSteps index={2} />
            <div className="basket-ordering">
              <OrderingForm
                firstName={firstName}
                setFirstName={setFirstName}
                isValidFirstName={isValidFirstName}
                setIsValidFirstName={setIsValidFirstName}
                lastName={lastName}
                setLastName={setLastName}
                isValidLastName={isValidLastName}
                setIsValidLastName={setIsValidLastName}
                surrName={surrName}
                setSurrName={setSurrName}
                isValidSurrName={isValidSurrName}
                setIsValidSurrName={setIsValidSurrName}
                phone={phone}
                setPhone={setPhone}
                isValidPhone={isValidPhone}
                setIsValidPhone={setIsValidPhone}
                delivery={delivery}
                setDelivery={setDelivery}
                address={address}
                setAddress={setAddress}
                isValidAddress={isValidAddress}
                setIsValidAddress={setIsValidAddress}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                deliveryTime={deliveryTime}
                setDeliveryTime={setDeliveryTime}
                isValidDeliveryTime={isValidDeliveryTime}
                setIsValidDeliveryTime={setIsValidDeliveryTime}
              />
              <OrderingComposition customsList={customsList} />
            </div>
            <OrderingButtons
              handleShowOrder={() => setModalState(true)}
              nextBtnType={"submitOrdering"}
            />
          </div>
        </div>

        <OrderingModal
          modalState={modalState}
          handleCloseModal={handleCloseModal}
          handleSubmitOrder={handleSubmitOrder}
          customsList={customsList}
          firstName={firstName}
          lastName={lastName}
          surrName={surrName}
          phone={phone}
          delivery={delivery}
          address={address}
          deliveryTime={deliveryTime}
          paymentMethod={paymentMethod}
        />
      </section>
    </main>
  );
};

export default Ordering;
