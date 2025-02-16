import { API_URL } from "@/constants";

async function getHomepageData() {
  const url = `${API_URL}dish/home`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export default getHomepageData;
