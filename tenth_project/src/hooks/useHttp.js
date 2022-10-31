import axios from "axios";
import { useState, useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    axios({
      url: requestConfig.url,
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      data: requestConfig.body ? requestConfig.body : null,
    })
      .then((data) => {
        applyData(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error("Request Failed");
      });
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
