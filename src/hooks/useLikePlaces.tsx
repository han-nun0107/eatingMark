import { useContext, useEffect } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";
import useApi from "./useApi";
import type { PlacesResponse } from "../@types/type";

export default function useLikePlaces(): void {
  const { setLikePlace } = useContext(EatingMarkContext);
  const { get } = useApi();

  useEffect(() => {
    const fetchLikePlaces = async () => {
      try {
        const data = (await get(
          "http://localhost:3000/users/places"
        )) as PlacesResponse;

        if (!data || data.error || !Array.isArray(data.places)) {
          setLikePlace([]);
        } else {
          setLikePlace(data.places);
        }
      } catch (err) {
        console.error("찜 목록 불러오기 실패:", err);
        setLikePlace([]);
      }
    };

    fetchLikePlaces();
  }, []);
}
