import { BreadCrumbs } from "@/components";
import { HomeDishes, HomeInfo } from "@/partials/Home";
import getHomepageData from "@/api/getHomepageData";

export default async function Home() {
  const data = await getHomepageData();
  return (
    <main className="main">
      <BreadCrumbs pathes={[{ path: "/", name: "Головна" }]} />
      <HomeDishes
        pizza={data.pizza}
        ramen={data.ramen}
        pasta={data.pasta}
        rolls={data.rolls}
      />
      <HomeInfo />
    </main>
  );
}
