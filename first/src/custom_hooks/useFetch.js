import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setItems(users);
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, [url]);
  return [items];
};
