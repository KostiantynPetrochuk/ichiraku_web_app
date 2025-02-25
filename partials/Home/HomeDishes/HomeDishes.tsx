import HomeDishesRow from "../HomeDishesRow";

import "./styles.scss";

const HomeDishes = (props: any) => {
  const { soups, noodles, salads, rice, drinks } = props;

  return (
    <section className="dishes">
      <div className="container">
        <HomeDishesRow dishes={soups} categoryName={"Soups"} slug={"soups"} />
        <HomeDishesRow
          dishes={noodles}
          categoryName={"Noodles"}
          slug={"noodles"}
        />
        <HomeDishesRow
          dishes={salads}
          categoryName={"Salads"}
          slug={"salads"}
        />
        <HomeDishesRow dishes={rice} categoryName={"Rice"} slug={"rice"} />
        <HomeDishesRow
          dishes={drinks}
          categoryName={"Drinks"}
          slug={"drinks"}
        />
      </div>
    </section>
  );
};

export default HomeDishes;
