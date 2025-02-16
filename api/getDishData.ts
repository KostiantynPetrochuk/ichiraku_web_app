import { API_URL } from "@/constants";

async function getDishData(slug: string) {
  const url = `${API_URL}dish/slug/${slug}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export default getDishData;
