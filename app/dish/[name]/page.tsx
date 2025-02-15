import BreadCrumbs from "../../../components/BreadCrumbs";
import Spinner from "../../../components/Spinner";
import { DishDetailsCard } from "../../../partials/Dish";

async function getDishData(id: string) {
  // request to serevr
  return {
    _id: "63f3d89f24e1d071ed3d079a",
    name: "Козацька",
    imagePath: "/static/dishes/pizza/cossack.webp",
    weight: 545,
    price: 203,
    isNovelty: false,
    dishCategory: "63f3d0cf24e1d071ed3d074f",
    __v: 0,
    slug: "cossack",
    ingredients: [
      "мисливські ковбаски",
      "шинка",
      "чилі",
      "огірки мариновані",
      "соус томатний",
      "салямі",
      "цибуля",
      "сир моцарела",
    ],
  };
}

const Dish = async ({ params }: { params: { id: string } }) => {
  const dish = await getDishData(params.id);

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
