import "./styles.scss";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img className="spinner__logo" src="/img/logo.jpg" alt="" />
      <div className="spinner"></div>
      <span className="spinner__info">Завантаження...</span>
    </div>
  );
};

export default Spinner;
