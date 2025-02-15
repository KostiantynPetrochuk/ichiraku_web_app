import { BasketCustom } from "..";

import createIngredientsString from "../../../helpers/createIngredientsString";

import "./styles.scss";

const BasketCustoms = (props: { customsList: any }) => {
  const { customsList } = props;

  const basketCustoms = customsList.map((basketCustom) => {
    const { dish } = basketCustom;

    const ingredientsString = dish.ingredients.length
      ? createIngredientsString(dish.ingredients)
      : "";

    return (
      <BasketCustom
        key={basketCustom._id}
        _id={basketCustom._id}
        imagePath={dish.imagePath}
        name={dish.name}
        price={dish.price}
        count={basketCustom.count}
        ingredients={ingredientsString}
      />
    );
  });

  return <ul className="basket-customs">{basketCustoms}</ul>;
};

export default BasketCustoms;
