import { useContext } from "react";
import type { Place } from "../@types/type";
import { EatingMarkContext } from "../context/eatingMarkContext";
import useApi from "./useApi";

export default function useLikePlacesPost() {
  const { post } = useApi();
  const { likePlace, setLikePlace } = useContext(EatingMarkContext);
  return async (place: Place) => {
    if (likePlace?.find((p) => p.id === place.id)) return;

    try {
      await post("http://localhost:3000/users/places", { place });
      setLikePlace((prev) => [...prev, place]);
      console.log(likePlace);
    } catch (err: unknown) {
      console.error("요청 실패:", err);
    }
  };
}
