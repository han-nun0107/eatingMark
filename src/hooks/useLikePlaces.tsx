import { useContext, useEffect } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";
import type { PlacesResponse } from "../@types/type";

export default function useLikePlaces(): void {
  const { setLikePlace } = useContext(EatingMarkContext);
  const likePlaces = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/users/places");
      const data: PlacesResponse = await response.json();

      if (data.error) {
        setLikePlace([]);
      } else {
        setLikePlace(data.places);
      }
    } catch (err: unknown) {
      console.log("에러", err);
    }
  };

  useEffect(() => {
    likePlaces();
  }, []);
}
