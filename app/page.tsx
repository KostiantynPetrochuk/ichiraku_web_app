import { BreadCrumbs } from "@/components";
import { HomeDishes, HomeInfo } from "@/partials/Home";
import getHomepageData from "@/api/getHomepageData";

export default async function Home() {
  const data = await getHomepageData();
  console.log({ data });
  return (
    <main className="main">
      <BreadCrumbs pathes={[{ path: "/", name: "Головна" }]} />
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
