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

  return (
    <main className="main">
      {/* <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: "/category/", name: dishes[0]?.dishCategory.name },
        ]}
      /> */}
      <CategoryList dishes={dishes} />
    </main>
  );
};

export default Category;
