import BreadCrumbs from "../../../components/BreadCrumbs";
import { CategoryList } from "../../../partials/Category";
import getDishesByCategory from "@/api/getDishesByCategory";

const Category = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const dishes = await getDishesByCategory(category);
  const categoryArr = category.split("");
  categoryArr[0] = categoryArr[0].toLocaleUpperCase();
  const categoryName = categoryArr.join("");

  return (
    <main className="main">
      {/* <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: "/category/", name: dishes[0]?.dishCategory.name },
        ]}
      /> */}
      <CategoryList name={categoryName} dishes={dishes} />
    </main>
  );
};

export default Category;
