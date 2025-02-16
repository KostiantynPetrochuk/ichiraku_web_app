import { API_URL } from "@/constants";

async function getDishesByCategory(category: string) {
  const url = `${API_URL}dish/category/${category}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
export default getDishesByCategory;
