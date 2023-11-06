import { useState, useEffect } from "react";
import { fetchData } from "../services/api";

export const useSWAPI = (category: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDataByCategory() {
      try {
        setLoading(true);
        const fetchedData = await fetchData(category);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
      }
    }

    fetchDataByCategory();
  }, [category]);

  return { data, loading };
};
