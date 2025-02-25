export type DishCategory = {
  _id: string;
  name: string;
  logoPath: string;
  slug: string;
};

export const DISH_CATEGORIES: DishCategory[] = [
  {
    _id: "1",
    name: "Soups",
    logoPath: "/static/categories_logo/soups.svg",
    slug: "soups",
  },
  {
    _id: "2",
    name: "Noodles",
    logoPath: "/static/categories_logo/noodle.svg",
    slug: "noodles",
  },
  {
    _id: "3",
    name: "Salads",
    logoPath: "/static/categories_logo/salad.svg",
    slug: "salads",
  },
  {
    _id: "4",
    name: "Rice",
    logoPath: "/static/categories_logo/rice.svg",
    slug: "rice",
  },
  {
    _id: "5",
    name: "Rolls",
    logoPath: "/static/categories_logo/rolls.svg",
    slug: "rolls",
  },
  {
    _id: "6",
    name: "Drinks",
    logoPath: "/static/categories_logo/drinks.svg",
    slug: "drinks",
  },
];
