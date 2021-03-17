import { useState } from 'react';
import { NasaResource } from 'interfaces/api';

interface UseResourceReturn {
  resources: NasaResource[];
  isLoading: boolean;
  hasError: boolean;
  error: Error | undefined;
  getResource(): Promise<void>;
}

const API_URL = process.env.REACT_APP_NASA_ULR;
const API_KEY = process.env.REACT_APP_NASA_API;

/**
 * Hook for fetching more awesome images/videos from NASA API
 * @returns resources, loading and error states.
 */
export const useResources = (): UseResourceReturn => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [resources, setResources] = useState<NasaResource[]>([]);

  const getResource = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/planetary/apod?api_key=${API_KEY}&count=1&thumbs`
      );

      const data = await response.json();

      setResources([...resources, data[0]]);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return {
    resources,
    isLoading,
    hasError: !!error,
    error,
    getResource,
  };
};
