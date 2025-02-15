import "./styles.scss";

const OrderingSteps = (props: { index: number }) => {
  const { index } = props;

  return (
    <div className="orderingSteps">
      <h3 className="orderingSteps__title">Кошик</h3>
      <div className="orderingSteps-wrapper">
        <div className={`orderingSteps-step${index === 1 ? " _active" : ""}`}>
          <span className="orderingSteps-step__item">1</span>
          <span className="orderingSteps-step__item">Кошик</span>
        </div>
        <span className="orderingSteps__divider">- - - - - -</span>
        <div className={`orderingSteps-step${index === 2 ? " _active" : ""}`}>
          <span className="orderingSteps-step__item">2</span>
          <span className="orderingSteps-step__item">Оформлення</span>
        </div>
        <span className="orderingSteps__divider">- - - - - -</span>
        <div className={`orderingSteps-step${index === 3 ? " _active" : ""}`}>
          <span className="orderingSteps-step__item">3</span>
          <span className="orderingSteps-step__item">Прийнято</span>
        </div>
      </div>
    </div>
  );
};

export default OrderingSteps;
