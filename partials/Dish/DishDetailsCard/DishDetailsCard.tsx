"use client";
import { useState } from "react";
import createIngredientsString from "../../../helpers/createIngredientsString";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addCustom, changeCount } from "../../../store/customSlice";

import "./styles.scss";

const DishDetailsCard = (props: { dish: any }) => {
  const { dish } = props;
  const dispatch = useAppDispatch();
  const customsList = useAppSelector((state) => state.customs.list);
  const isDishInBasket = customsList.find((custom) => custom._id === dish?._id);
  const [dishCount, setDishCount] = useState(1);

  const handleAddCustom = () => {
    if (dish !== null) {
      const currentCustom = {
        _id: dish._id,
        dish: dish,
        count: dishCount,
      };
      dispatch(addCustom(currentCustom));
      setDishCount(1);
    }
  };

  const handleAddDish = () => {
    if (dishCount >= 10) return;
    setDishCount(dishCount + 1);
  };

  const handleRemoveDish = () => {
    if (dishCount <= 1) return;
    setDishCount(dishCount - 1);
  };

  const ingredientsString: string = dish?.ingredients.length
    ? createIngredientsString(dish?.ingredients)
    : "";

  const handleCountIncrement = () => {
    if (isDishInBasket && dish !== null) {
      dispatch(
        changeCount({ _id: dish?._id, updatedCount: isDishInBasket.count + 1 })
      );
    }
  };

  const handleCountDecrement = () => {
    if (isDishInBasket && dish !== null) {
      dispatch(
        changeCount({ _id: dish?._id, updatedCount: isDishInBasket.count - 1 })
      );
    }
  };

  const counterClassName = `dish-card-total__counter${
    isDishInBasket ? " _inBasket" : ""
  }`;

  return (
    <section className="dish-details">
      <div className="container">
        <div className="dish-details-inner">
          <div className="dish-card">
            <div className="dish-card-img-inner">
              <img className="dish-card__img" src={dish?.imagePath} alt={""} />
            </div>
            <div className="dish-card-details">
              <div className="dish-card-top">
                <span className="dish-card__weight">{dish?.weight}г</span>
                <span className="dish-card__name">{dish?.name}</span>
              </div>
              <div className="dish-card-mid">
                <span className="dish-card__ingredients">
                  {ingredientsString}
                </span>
              </div>
              <div className="dish-card-bot">
                <div className="dish-card-total">
                  <span className="dish-card-total-price">
                    {dish?.price}грн
                  </span>
                  <div className={counterClassName}>
                    <div
                      className="dish-card-total__remove"
                      onClick={handleRemoveDish}
                    >
                      -
                    </div>
                    <div className="dish-card-total__count">{dishCount}</div>
                    <div
                      className="dish-card-total__add"
                      onClick={handleAddDish}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="dish-card-total-button-inner">
                  {isDishInBasket ? (
                    <div className="dish-card-counter-inner">
                      <button
                        className="dish-card-counter__button"
                        onClick={handleCountDecrement}
                      >
                        -
                      </button>
                      <span className="">{isDishInBasket.count}</span>
                      <button
                        className="dish-card-counter__button"
                        onClick={handleCountIncrement}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="dish-card-total__button"
                      onClick={handleAddCustom}
                    >
                      Додати в кошик
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishDetailsCard;
