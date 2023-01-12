import { useState, useEffect } from 'react';

const API_KEY = '32626777-d0a1bb2da9c00357191337fbf';

export default function useData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setData(data.hits);
    }

    getData();
  }, []);

  return data;
}