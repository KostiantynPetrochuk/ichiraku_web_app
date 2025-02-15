import Image from "next/image";
import { BreadCrumbs } from "@/components";
import { HomeNovelty, HomeDishes, HomeEvents, HomeInfo } from "@/partials/Home";
import Spinner from "@/components/Spinner";

const homePageData = {
  novelties: [
    {
      _id: "63f3d85124e1d071ed3d0795",
      name: "Капрічоза",
      imagePath: "/static/dishes/pizza/caprice.webp",
      weight: 550,
      price: 195,
      isNovelty: true,
      dishCategory: "63f3d0cf24e1d071ed3d074f",
      __v: 0,
      slug: "caprice",
    },
    {
      _id: "63f3d66c24e1d071ed3d077d",
      name: "Філадельфія з лососем та авокадо",
      imagePath:
        "/static/dishes/rolls/philadelphia_with_salmon_and_avocado.webp",
      weight: 330,
      price: 435,
      isNovelty: true,
      dishCategory: "63f3d0ca24e1d071ed3d074d",
      __v: 0,
      slug: "philadelphia-with-salmon-and-avocado",
    },
    {
      _id: "63f3d64024e1d071ed3d077b",
      name: "Філадельфія з лососем",
      imagePath: "/static/dishes/rolls/philadelphia_with_salmon.webp",
      weight: 320,
      price: 405,
      isNovelty: true,
      dishCategory: "63f3d0ca24e1d071ed3d074d",
      __v: 0,
      slug: "philadelphia-with-salmon",
    },
    {
      _id: "63f3d53c24e1d071ed3d076c",
      name: "Фо бо з яловичиною",
      imagePath: "/static/dishes/ramen/pho_bo_with_beef.webp",
      weight: 545,
      price: 210,
      isNovelty: true,
      dishCategory: "63f3d0c024e1d071ed3d074b",
      __v: 0,
      slug: "pho-bo-with-beef",
    },
  ],
  ramen: [
    {
      _id: "63f3d5e124e1d071ed3d0776",
      name: "Рамен з морепродуктами",
      imagePath: "/static/dishes/ramen/ramen_with_seafood.webp",
      weight: 630,
      price: 285,
      isNovelty: false,
      dishCategory: "63f3d0c024e1d071ed3d074b",
      __v: 0,
      slug: "ramen-with-seafood",
      ingredients: [
        "зелена цибуля",
        "кунжут",
        "кальмари",
        "локшина",
        "бульйон з гострим соусом Ширачі",
        "креветка",
        "перець чилі",
        "аспарагус",
        "салат фрізе",
        "кукурудза бебі",
        "яйце мариноване",
      ],
    },
    {
      _id: "63f3d47a24e1d071ed3d0764",
      name: "Рамен чікен карі",
      imagePath: "/static/dishes/ramen/ramen_chicken_curry.webp",
      weight: 670,
      price: 240,
      isNovelty: false,
      dishCategory: "63f3d0c024e1d071ed3d074b",
      __v: 0,
      slug: "ramen-chicken-curry",
      ingredients: [
        "бульйон рамен",
        "курка в соусі карі",
        "кукурудза",
        "яйце мариноване",
        "ромен",
        "нитки чілі",
        "фрі рукола та морква",
        "локшина",
        "фурікаке",
      ],
    },
    {
      _id: "63f3d55824e1d071ed3d076e",
      name: "Рамен зі свининою Тясю",
      imagePath: "/static/dishes/ramen/ramen_with_tyasyu_pork.webp",
      weight: 570,
      price: 200,
      isNovelty: false,
      dishCategory: "63f3d0c024e1d071ed3d074b",
      __v: 0,
      slug: "ramen-with-tyasyu-pork",
      ingredients: [
        "свинина Тясю",
        "локшина",
        "соус Ширачі",
        "мариноване яйце",
        "водорості норі",
        "зелена цибуля",
        "бульйон",
      ],
    },
    {
      _id: "63f3d4dd24e1d071ed3d0768",
      name: "Рамен з копченим лососем",
      imagePath: "/static/dishes/ramen/ramen_with_smoked_salmon.webp",
      weight: 645,
      price: 265,
      isNovelty: false,
      dishCategory: "63f3d0c024e1d071ed3d074b",
      __v: 0,
      slug: "ramen-with-smoked-salmon",
      ingredients: [
        "мікс кунжуту",
        "норі",
        "чері бланширований",
        "фурікаке",
        "бульйон з гострим соусом Ширачі",
        "гливи фрі",
        "лайм",
        "кукурудза",
        "рисова локшина",
        "зелена цибуля",
        "обпалений копчений лосось",
      ],
    },
  ],
  pizza: [
    {
      _id: "63f3d8e524e1d071ed3d079e",
      name: "Пепероні",
      imagePath: "/static/dishes/pizza/pepperoni.webp",
      weight: 410,
      price: 190,
      isNovelty: false,
      dishCategory: "63f3d0cf24e1d071ed3d074f",
      __v: 0,
      slug: "pepperoni",
      ingredients: ["сир моцарела", "пепероні", "соус томатний"],
    },
    {
      _id: "63f3da5824e1d071ed3d07b2",
      name: "Фелічіта",
      imagePath: "/static/dishes/pizza/felicita.webp",
      weight: 530,
      price: 185,
      isNovelty: false,
      dishCategory: "63f3d0cf24e1d071ed3d074f",
      __v: 0,
      slug: "felicita",
      ingredients: [
        "бекон",
        "куряче філе",
        "соус томатний",
        "сир моцарела",
        "гриби",
      ],
    },
    {
      _id: "63f3d9ae24e1d071ed3d07a8",
      name: "Карлеоне",
      imagePath: "/static/dishes/pizza/corleone.webp",
      weight: 450,
      price: 195,
      isNovelty: false,
      dishCategory: "63f3d0cf24e1d071ed3d074f",
      __v: 0,
      slug: "corleone",
      ingredients: ["соус томатний", "пепероні", "сир моцарела", "сир дор блю"],
    },
    {
      _id: "63f3d91d24e1d071ed3d07a0",
      name: "Техас",
      imagePath: "/static/dishes/pizza/texas.webp",
      weight: 490,
      price: 200,
      isNovelty: false,
      dishCategory: "63f3d0cf24e1d071ed3d074f",
      __v: 0,
      slug: "texas",
      ingredients: [
        "куряче філе",
        "шинка",
        "соус томатний",
        "сир моцарела",
        "помідори",
        "соус солодкий чилі",
      ],
    },
  ],
  latestEvents: [
    {
      _id: "641c9860f20804c0053cd7f4",
      imagePath: "/static/events/event_04.webp",
      title: "Це тайтл четвертої акції",
      body: "А це довгий боді четвертої акції",
      __v: 0,
    },
    {
      _id: "641c9851f20804c0053cd7f2",
      imagePath: "/static/events/event_03.webp",
      title: "Це тайтл третьої акції",
      body: "А це довгий боді третьої акції",
      __v: 0,
    },
    {
      _id: "641c981cf20804c0053cd7f0",
      imagePath: "/static/events/event_02.webp",
      title: "Це тайтл другої акції",
      body: "А це довгий боді другої факції",
      __v: 0,
    },
    {
      _id: "641c979bf20804c0053cd7ea",
      imagePath: "/static/events/event_01.webp",
      title: "Це тайтл першої акції",
      body: "А це довгий боді першої новини",
      __v: 0,
    },
  ],
};

export default function Home() {
  return homePageData ? (
    <main className="main">
      <BreadCrumbs pathes={[{ path: "/", name: "Головна" }]} />
      <HomeNovelty novelties={homePageData?.novelties} />
      <HomeDishes pizza={homePageData.pizza} ramen={homePageData.ramen} />
      <HomeEvents events={homePageData.latestEvents} />
      <HomeInfo />
    </main>
  ) : (
    <Spinner />
  );
  //
  // return (
  //   <main className="main">
  //     <BreadCrumbs pathes={[{ path: "/", name: "Головна" }]} />
  //     <HomeNovelty novelties={[]} />
  //     <HomeDishes pizza={[]} ramen={[]} />
  //     <HomeEvents events={[]} />
  //     <HomeInfo />
  //   </main>
  // );
}
