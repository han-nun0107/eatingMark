import { useContext, useEffect } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";

export default function useLikePlacesGet() {
  const { setLikePlace } = useContext(EatingMarkContext);

  const fetchLikePlaces = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/users/places");
      const data = await response.json();

      if (data.err) {
        setLikePlace([]);
      } else {
        setLikePlace(data.places);
      }
    } catch (err) {
      console.error("요청 실패:", err);
    }
  };

  useEffect(() => {
    fetchLikePlaces();
  }, [setLikePlace]);
}
