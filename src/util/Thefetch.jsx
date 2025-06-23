import { useState, useEffect } from "react";

export function useFetch(url) {
  const [products, setProducts] = useState(null); // null by default
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //this function fetches data from the provided URL
    // and updates the state accordingly
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        // If result has a 'products' array, use it; else, use the object itself
        setProducts(result.products ? result.products : result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, loading, error };
}
