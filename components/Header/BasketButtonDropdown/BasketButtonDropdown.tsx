import BasketButtonDropdownItem from "../BasketButtonDropdownItem";
import { useAppSelector } from "../../../hooks";

import "./styles.scss";

const BasketButtonDropdown = () => {
  const customsList = useAppSelector((state) => state.customs.list);

  const orderAmount = customsList.reduce((a, b) => {
    const currentItemPrice = b.count * b.dish.price;
    return a + currentItemPrice;
  }, 0);

  const basketList = customsList.map((custom) => (
    <BasketButtonDropdownItem
      key={custom._id}
      _id={custom._id}
      imagePath={custom.dish.imagePath}
      dishName={custom.dish.name}
      count={custom.count}
      price={custom.dish.price * custom.count}
    />
  ));

  return (
    <div className="header-bot-basket-dropdown">
      <ul className="header-bot-basket-dropdown-list">{basketList}</ul>
      <div className="header-bot-basket-amount">
        {customsList.length ? (
          <>
            <span>Сума замовлення</span>
            <span>{orderAmount} грн</span>
          </>
        ) : (
          <span className="header-bot-basket-amount__info">Кошик пустий</span>
        )}
      </div>
    </div>
  );
};

export default BasketButtonDropdown;
