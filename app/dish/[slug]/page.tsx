import BreadCrumbs from "../../../components/BreadCrumbs";
import Spinner from "../../../components/Spinner";
import { DishDetailsCard } from "../../../partials/Dish";

async function getDishData(slug: string) {
  const url = `dish/slug/${slug}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

const Dish = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const dish = await getDishData(slug);

  return (
    <main className="main">
      {/* <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: `/category/${categorySlug}`, name: categoryName },
          { path: "/dish", name: String(dish?.name) },
        ]}
      /> */}
      <DishDetailsCard dish={dish} />
    </main>
  );
};

export default Dish;
