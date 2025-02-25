import DishCard from "../../../components/DishCard";
import "./styles.scss";

const CategoryList = (props: { dishes: any[]; name: string }) => {
  const { dishes, name } = props;

  const content: any[] = dishes.map((dish: any) => (
    <DishCard key={dish._id} dish={dish} />
  ));

  return (
    <section className="category">
      <div className="container">
        <div className="category-inner">
          <h3 className="category-name">{name}</h3>
          <ul className="category-list">{content}</ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
