import { useAppDispatch } from "../../../hooks";
import { changeCount, removeCustom } from "../../../store/customSlice";

import "./styles.scss";

type BasketButtonDropdownItemPropTypes = {
  _id: string;
  imagePath: string;
  dishName: string;
  count: number;
  price: number;
};

const BasketButtonDropdownItem = (props: BasketButtonDropdownItemPropTypes) => {
  const { _id, imagePath, dishName, count, price } = props;

  const dispatch = useAppDispatch();

  const handleCountIncrement = () => {
    dispatch(changeCount({ _id, updatedCount: count + 1 }));
  };

  const handleCountDecrement = () => {
    dispatch(changeCount({ _id, updatedCount: count - 1 }));
  };

  const handleCustomRemove = () => {
    dispatch(removeCustom({ _id }));
  };

  return (
    <li className="header-bot-basket-dropdown-list-item">
      <div className="header-bot-basket-left">
        <img className="header-bot-basket__img" src={imagePath} alt={""} />
      </div>
      <div className="header-bot-basket-middle">
        <span className="header-bot-basket__dish">{dishName}</span>
        <div className="header-bot-basket-counter">
          <div
            className="header-bot-basket-counter__remove"
            onClick={handleCountDecrement}
          >
            -
          </div>
          <div className="header-bot-basket-counter__show">{count}</div>
          <div
            className="header-bot-basket-counter__add"
            onClick={handleCountIncrement}
          >
            +
          </div>
        </div>
      </div>
      <div className="header-bot-basket-right">
        <span
          className="header-bot-basket__remove"
          onClick={handleCustomRemove}
        >
          <span></span>
          <span></span>
        </span>
        <span className="header-bot-basket-item__price">{price}&nbsp;грн</span>
      </div>
    </li>
  );
};

export default BasketButtonDropdownItem;
