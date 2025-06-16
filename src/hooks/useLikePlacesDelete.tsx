import type { Place } from "../@types/type";
import useApi from "./useApi";
import { useContext } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";

export default function useLikePlacesDelete() {
  const { del } = useApi();
  const { setLikePlace } = useContext(EatingMarkContext);

  return async (place: Place) => {
    try {
      await del(`http://localhost:3000/users/places/${place.id}`);
      setLikePlace((lp) => lp.filter((p) => p.id !== place.id));
    } catch (err: unknown) {
      console.error("요청 실패:", err);
    }
  };
}
