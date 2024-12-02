import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);  // Start loading state
        const response = await fetch(url, {
          method: options.method || 'GET', // Default to GET if method not provided
          headers: options.headers || {
            'Content-Type': 'application/json',
            // Add other default headers if needed
          },
          body: options.body ? JSON.stringify(options.body) : undefined,
        });

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);  // Set data state with the result
      } catch (err) {
        setError(err.message || 'Something went wrong');  // Handle errors
      } finally {
        setLoading(false);  // End loading state
      }
    };

    fetchData();
  }, [url, options]);  // Re-run the effect when URL or options change

  return { data, error, loading };
};

export default useFetch;
