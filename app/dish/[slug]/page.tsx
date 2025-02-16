import BreadCrumbs from "../../../components/BreadCrumbs";
import { DishDetailsCard } from "../../../partials/Dish";
import getDishData from "@/api/getDishData";

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
