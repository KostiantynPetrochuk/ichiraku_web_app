export type DishCategory = {
  _id: string;
  name: string;
  __v: number;
  imagePath: string;
  logoPath: string;
  slug: string;
};

export const DISH_CATEGORIES: DishCategory[] = [
  {
    _id: "63f3d0ae24e1d071ed3d0749",
    name: "Паста",
    __v: 0,
    imagePath: "/static/categories/pasta.webp",
    logoPath: "/static/categories_logo/pasta.svg",
    slug: "pasta",
  },
  {
    _id: "63f3d0cf24e1d071ed3d074f",
    name: "Піца",
    __v: 0,
    imagePath: "/static/categories/pizza.webp",
    logoPath: "/static/categories_logo/pizza.svg",
    slug: "pizza",
  },
  {
    _id: "63f3d0c024e1d071ed3d074b",
    name: "Рамен",
    __v: 0,
    imagePath: "/static/categories/ramen.webp",
    logoPath: "/static/categories_logo/ramen.svg",
    slug: "ramen",
  },
  {
    _id: "63f3d0ca24e1d071ed3d074d",
    name: "Роли",
    __v: 0,
    imagePath: "/static/categories/rolls.webp",
    logoPath: "/static/categories_logo/rolls.svg",
    slug: "rolls",
  },
  {
    _id: "63f4cce97276ad889d49f57d",
    name: "Соуси",
    __v: 0,
    imagePath: "/static/categories/sauce.webp",
    logoPath: "/static/categories_logo/sauce.svg",
    slug: "sauces",
  },
  {
    _id: "63f4cd017276ad889d49f57e",
    name: "Напої",
    __v: 0,
    imagePath: "/static/categories/drinks.webp",
    logoPath: "/static/categories_logo/drinks.svg",
    slug: "drinks",
  },
];
