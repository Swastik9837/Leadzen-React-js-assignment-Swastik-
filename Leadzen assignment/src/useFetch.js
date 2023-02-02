import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://jsonplaceholder.typicode.com/users";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataMore, setDataMore] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(paginate(data));
    setDataMore(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data, dataMore };
};
