import HomeInfoItem from "../HomeInfoItem";
import "./styles.scss";

const HomeInfo = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info-inner">
          <h3 className="info-title">Оплата і доставка</h3>
          <ul className="info-list">
            <HomeInfoItem imagePath="/img/info_01.svg" title="Вибір товару" />
            <HomeInfoItem
              imagePath="/img/info_02.svg"
              title="Оформлення замовлення"
            />
            <HomeInfoItem
              imagePath="/img/info_03.svg"
              title="Підтвердження замовлення"
            />
            <HomeInfoItem imagePath="/img/info_04.svg" title="Доставка" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
