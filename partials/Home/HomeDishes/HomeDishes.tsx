import HomeDishesRow from "../HomeDishesRow";

import "./styles.scss";

const HomeDishes = (props: any) => {
  const { pizza, ramen } = props;

  return (
    <section className="dishes">
      <div className="container">
        <HomeDishesRow dishes={pizza} categoryName={"Піца"} slug={"pizza"} />
        <HomeDishesRow dishes={ramen} categoryName={"Рамен"} slug={"ramen"} />
      </div>
    </section>
  );
};

export default HomeDishes;
