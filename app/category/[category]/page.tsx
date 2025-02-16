import BreadCrumbs from "../../../components/BreadCrumbs";
import Spinner from "../../../components/Spinner";
import { CategoryList } from "../../../partials/Category";

async function getDishesByCategory(category: string) {
  const url = `dish/category/${category}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

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
