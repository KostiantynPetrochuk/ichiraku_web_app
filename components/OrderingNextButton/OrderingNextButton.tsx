import Link from "next/link";

import "./styles.scss";

type OrderingNextButtonPropsT = {
  handleSubmitOrder: (() => void) | null;
  nextBtnType: string | null;
};

const OrderingNextButton = (props: OrderingNextButtonPropsT) => {
  const { handleSubmitOrder, nextBtnType } = props;
  return nextBtnType === "submitOrdering" && handleSubmitOrder !== null ? (
    <button onClick={handleSubmitOrder} className="basket-button-next">
      <span>Підтвердити</span>
      <span className="basket-button-next-arrow">
        <span></span>
        <span></span>
      </span>
    </button>
  ) : (
    <Link href={`/ordering`} className="basket-button-next">
      <span>Оформити замовлення</span>
      <span className="basket-button-next-arrow">
        <span></span>
        <span></span>
      </span>
    </Link>
  );
};

export default OrderingNextButton;
