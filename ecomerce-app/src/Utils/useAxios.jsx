import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (apiPath) => {
  const [apiData, setApidata] = useState({});
  const [loading, setLoading] = useState(true);

  const dataHandler = async () => {
    try {
      console.log(apiPath);
      const res = await axios.get(apiPath);
      console.log(res);
      setApidata(res.data);
      setLoading(false);
    } catch (err) {
      console.error(`something is wrong data is not fetch properly`, err);
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return { apiData, loading };
};

export { useAxios };
