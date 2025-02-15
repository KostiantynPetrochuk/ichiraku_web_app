"use client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addCustom, changeCount } from "../../store/customSlice";
import createIngredientsString from "../../helpers/createIngredientsString";

import "./styles.scss";

const DishCard = (props: { dish: any }) => {
  const { dish } = props;
  const { _id, imagePath, name, price, slug } = dish;
  const dispatch = useAppDispatch();
  const customsList = useAppSelector((state) => state.customs.list);
  const isDishInBasket = customsList.find((custom) => custom._id === _id);

  const ingredientsString = dish.ingredients.length
    ? createIngredientsString(dish.ingredients)
    : "";

  const handleAddCustom = () => {
    if (_id !== null) {
      const currentCustom = {
        _id,
        dish: props.dish,
        count: 1,
      };
      dispatch(addCustom(currentCustom));
    }
  };

  const handleCountIncrement = () => {
    if (isDishInBasket) {
      dispatch(changeCount({ _id, updatedCount: isDishInBasket.count + 1 }));
    }
  };

  const handleCountDecrement = () => {
    if (isDishInBasket) {
      dispatch(changeCount({ _id, updatedCount: isDishInBasket.count - 1 }));
    }
  };

  return (
    <li className="dishes-list-item">
      <img className="dishes-list-item__img" src={imagePath} alt={""} />
      <div className="dishes-list-item-body">
        <Link href={`/dish/${slug}`} className="dishes-list-item-body__title">
          {name}
        </Link>
        <span className="dishes-list-item-ingredients">
          {ingredientsString}
        </span>
        <div className="dishes-list-item-bot">
          <span className="dishes-list-item__price">{price}грн</span>

          {isDishInBasket ? (
            <div className="dishes-list-item-buttons">
              <button
                className="dishes-list-item__button"
                onClick={handleCountDecrement}
              >
                -
              </button>
              <span className="dishes-list-item-buttons__count">
                {isDishInBasket.count}
              </span>
              <button
                className="dishes-list-item__button"
                onClick={handleCountIncrement}
              >
                +
              </button>
            </div>
          ) : (
            <button className="dishes-item__button" onClick={handleAddCustom}>
              В кошик
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default DishCard;
