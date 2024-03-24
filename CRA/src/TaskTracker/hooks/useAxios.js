import axios from 'axios';
import { useCallback, useState } from 'react';

const useAxios = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(async (options, callback) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios(options);
      console.log('Response: ', data);
      callback(data);
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
    setIsLoading(false);
  }, []);
  return { error, isLoading, request };
};

export default useAxios;
