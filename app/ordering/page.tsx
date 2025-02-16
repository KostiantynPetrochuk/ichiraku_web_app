"use client";
import { useState } from "react";
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
import { API_URL } from "@/constants";

import "./styles.scss";

const Ordering = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    surrName: "",
    phone: "",
    delivery: false,
    address: "",
    deliveryTime: "",
    paymentMethod: false,
  });
  const [validations, setValidations] = useState({
    firstName: true,
    lastName: true,
    surrName: true,
    phone: true,
    address: true,
    deliveryTime: true,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const customsList: any[] = useAppSelector((state) => state.customs.list);

  const handleChange = (value: any, inputName: any) => {
    setFormData({ ...formData, [inputName]: value });
  };
  const handleChangeValidation = (value: any, inputName: any) => {
    setValidations({ ...validations, [inputName]: value });
  };
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
  };

  const validateForm = () => {
    const newValidations = {
      firstName: formData.firstName.length >= 3,
      lastName: formData.lastName.length >= 3,
      surrName: formData.surrName.length >= 3,
      phone: formData.phone.length >= 10,
      address: formData.delivery ? formData.address.length >= 10 : true,
      deliveryTime: formData.delivery
        ? formData.deliveryTime.length >= 4
        : true,
    };
    setValidations(newValidations);
    return Object.values(newValidations).every(Boolean);
  };

  const handleSubmitOrder = async (): Promise<void> => {
    setLoading(true);
    let isValid = true;
    if (!validateForm()) {
      setShowNotification(true);
      setLoading(false);
      setModalState(false);
      scrollToTop();
      return;
    }
    const formFields = [
      {
        name: "firstName",
        value: formData.firstName,
        minLength: 3,
      },
      {
        name: "lastName",
        value: formData.lastName,
        minLength: 3,
      },
      {
        name: "surrName",
        value: formData.surrName,
        minLength: 3,
      },
      {
        name: "phone",
        value: formData.phone,
        minLength: 10,
      },
    ];
    for (const formField of formFields) {
      if (formField.value.length < formField.minLength) {
        handleChangeValidation(false, formField.name);
        isValid = false;
      } else {
        handleChangeValidation(true, formField.name);
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      surrName: formData.surrName,
      phone: Number(formData.phone),
      delivery: formData.delivery,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      deliveryTime: formData.deliveryTime,
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
                formData={formData}
                handleChange={handleChange}
                validations={validations}
                handleChangeValidation={handleChangeValidation}
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
          formData={formData}
        />
      </section>
    </main>
  );
};

export default Ordering;
