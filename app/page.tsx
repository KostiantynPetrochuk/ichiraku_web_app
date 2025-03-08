import { BreadCrumbs } from "@/components";
import { HomeDishes, HomeInfo } from "@/partials/Home";
import getHomepageData from "@/api/getHomepageData";
import HomePromo from "@/partials/Home/HomePromo";

export default async function Home() {
  const data = await getHomepageData();
  return (
    <main className="main">
      <BreadCrumbs pathes={[{ path: "/", name: "Головна" }]} />
      <HomePromo />
      <HomeDishes
        soups={data.soups}
        noodles={data.noodles}
        salads={data.salads}
        rice={data.rice}
        drinks={data.drinks}
      />
      <HomeInfo />
    </main>
  );
}
