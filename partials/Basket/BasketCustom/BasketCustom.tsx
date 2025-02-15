import { useAppDispatch } from "../../../hooks";
import { changeCount, removeCustom } from "../../../store/customSlice";

import "./styles.scss";

interface BasketCustomPropsType {
  _id: string;
  imagePath: string;
  name: string;
  ingredients: string;
  price: number;
  count: number;
}

const BasketCustom = (props: BasketCustomPropsType) => {
  const { _id, imagePath, name, ingredients, price, count } = props;

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
    <li className="basket-custom">
      <div className="basket-custom-left">
        <div className="basket-custom-img-inner">
          <img
            className="basket-custom__img"
            src={imagePath}
            alt={""}
            width={500}
            height={500}
          />
        </div>
        <div className="basket-custom-details">
          <span className="basket-custom-details__title">{name}</span>
          <span className="basket-custom-details__ingredients">
            {ingredients}
          </span>
        </div>
      </div>
      <div className="basket-custom-right">
        <div className="basket-custom-price">{price}грн</div>
        <div className="basket-custom__counter">
          <div
            className="basket-custom__remove_count"
            onClick={handleCountDecrement}
          >
            -
          </div>
          <div className="basket-custom__count">{count}</div>
          <div className="basket-custom__add" onClick={handleCountIncrement}>
            +
          </div>
        </div>
        <div className="basket-custom__remove" onClick={handleCustomRemove}>
          <span></span>
          <span></span>
        </div>
      </div>
    </li>
  );
};

export default BasketCustom;
