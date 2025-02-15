import OrderingSteps from "../../components/OrderingSteps/OrderingSteps";
import HomeButton from "../../components/HomeButton";

import "./styles.scss";

const Confirmed = () => {
  return (
    <main className="main">
      <div className="container">
        <OrderingSteps index={3} />
        <section className="confirmed">
          <div className="confirmed-title">Замовлення підтверджено!</div>
          <div className="confirmed-icon">
            <span className="confirmed-icon-item"></span>
          </div>
          <div className="confirmed-info">
            Менеджер зв&apos;яжеться з вами наближчим часом, для уточнення
            деталей замовлення.
          </div>
          <HomeButton />
        </section>
      </div>
    </main>
  );
};

export default Confirmed;
