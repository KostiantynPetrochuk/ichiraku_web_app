import { BreadCrumbs } from "@/components";
import { HomeNovelty, HomeDishes, HomeInfo } from "@/partials/Home";
import getHomepageData from "@/api/getHomepageData";

export default async function Home() {
  const data = await getHomepageData();
  return (
    <main className="main">
      <BreadCrumbs pathes={[{ path: "/", name: "Головна" }]} />
      <HomeNovelty novelties={data?.novelties} />
      <HomeDishes
        pizza={data.pizza}
        ramen={data.ramen}
        pasta={data.pasta}
        rolls={data.rolls}
      />
      {/* <HomeEvents events={data.latestEvents} /> */}
      <HomeInfo />
    </main>
  );
}
