import DishCard from "../../../components/DishCard";
import "./styles.scss";

const CategoryList = (props: { dishes: any[] }) => {
  const { dishes } = props;
  const categoryName: string = dishes[0]?.dishCategory.name;

  const content: any[] = dishes.map((dish: any) => (
    <DishCard key={dish._id} dish={dish} />
  ));

  return (
    <section className="category">
      <div className="container">
        <div className="category-inner">
          <h3 className="category-name">{categoryName}</h3>
          <ul className="category-list">{content}</ul>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
