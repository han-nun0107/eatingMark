import { useContext, useEffect } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";
import type { PlacesResponse } from "../@types/type";

export default function usePlace(): void {
  const { setPlace, setIsLoading, setIsError } = useContext(EatingMarkContext);

  const eatingPlace = async (): Promise<void> => {
    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:3000/places");
      const data: PlacesResponse = await response.json();

      if (response.status === 404) {
        setIsError(true);
        return;
      }

      if (data.error) {
        setPlace([]);
      } else {
        setPlace(data.places);
      }
    } catch (err: unknown) {
      console.error("에러", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    eatingPlace();
  }, []);
}
