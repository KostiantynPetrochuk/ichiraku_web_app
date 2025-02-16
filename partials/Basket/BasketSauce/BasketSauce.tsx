import { addCustom, removeCustom } from "../../../store/customSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

import "./styles.scss";

const BasketSauce = (props: any) => {
  const { _id, sauce } = props;
  const { imagePath, name, price } = sauce;
  const dispatch = useAppDispatch();
  const customsList = useAppSelector((state) => state.customs.list);

  const ifSauceInTheBasket = customsList.find((custom) => {
    return custom._id === _id;
  });

  const handleClick = () => {
    if (ifSauceInTheBasket) {
      dispatch(removeCustom({ _id }));
      return;
    }
    const currentCustom = {
      _id,
      dish: sauce,
      count: 1,
    };
    dispatch(addCustom(currentCustom));
  };

  return (
    <li
      onClick={handleClick}
      className={`basket-sauces-item${ifSauceInTheBasket ? " _inBasket" : ""}`}
    >
      <div className="basket-sauces-item-img-inner">
        <img
          className="basket-sauces-item__img"
          src={imagePath}
          alt={""}
          width={500}
          height={500}
        />
      </div>
      <span className="basket-sauces-item__name">{name}</span>
      <span className="basket-sauces-item__price">{price}грн</span>
    </li>
  );
};

export default BasketSauce;
