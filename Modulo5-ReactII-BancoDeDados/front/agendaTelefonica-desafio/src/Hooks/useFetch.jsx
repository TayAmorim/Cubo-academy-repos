/* eslint-disable no-unsafe-finally */
import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json);
    } catch (error) {
      json = null;
    } finally {
      setData(json);
      return { response, json };
    }
  }, []);

  return {
    data,
    request,
  };
};

export default useFetch;
