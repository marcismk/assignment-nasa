import { useEffect, useState } from 'react';
import { NasaResource } from 'interfaces/api';

interface UseApodReturn {
  resource: NasaResource | undefined;
  isLoading: boolean;
  hasError: boolean;
  error: Error | undefined;
}

const API_URL = process.env.REACT_APP_NASA_ULR;
const API_KEY = process.env.REACT_APP_NASA_API;

/**
 * Hook for consuming NASA ADOP API
 * @returns resource, loading and error states.
 */
export const useApod = (): UseApodReturn => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [resource, setResource] = useState<NasaResource>();

  const getResourceOfTheday = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/planetary/apod?api_key=${API_KEY}`
      );

      const data = await response.json();

      setResource(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getResourceOfTheday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    resource,
    isLoading,
    hasError: !!error,
    error,
  };
};
