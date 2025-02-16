import HomeDishesRow from "../HomeDishesRow";

import "./styles.scss";

const HomeDishes = (props: any) => {
  const { pizza, ramen, pasta, rolls } = props;

  return (
    <section className="dishes">
      <div className="container">
        <HomeDishesRow dishes={pizza} categoryName={"Піца"} slug={"pizza"} />
        <HomeDishesRow dishes={ramen} categoryName={"Рамен"} slug={"ramen"} />
        <HomeDishesRow dishes={pasta} categoryName={"Паста"} slug={"pasta"} />
        <HomeDishesRow dishes={rolls} categoryName={"Роли"} slug={"rolls"} />
      </div>
    </section>
  );
};

export default HomeDishes;
