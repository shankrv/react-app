import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

async function httpRequest(url, config) {
  return axios(url, config);
}

export default function useAxios(url, config) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async function (body) {
      setIsLoading(true);
      try {
        const response = await httpRequest(url, { ...config, data: body });
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (!config) sendRequest();
  }, [config, sendRequest]);

  function clearData() {
    setData();
  }

  return { data, error, isLoading, sendRequest, clearData };
}
