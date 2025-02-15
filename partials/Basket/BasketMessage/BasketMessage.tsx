import HomeButton from "../../../components/HomeButton/HomeButton";

import "./styles.scss";

const BasketMessage = () => (
  <div className="basketMessge-inner">
    <h3 className="basketMessge__title">Порожньо</h3>
    <img className="basketMessge__logo" src="/img/logo.jpg" alt="" />
    <HomeButton />
  </div>
);

export default BasketMessage;
