import { useContext } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";
import type { Place } from "../@types/type";

export default function useLikePlacesDelete(): (place: Place) => Promise<void> {
  const { setLikePlace } = useContext(EatingMarkContext);

  const deleteLikePlace = async (place: Place): Promise<void> => {
    try {
      const response = await fetch(
        `http://localhost:3000/users/places/${place.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        console.error("삭제 실패:", response.status);
        return;
      }

      setLikePlace((lp) => lp.filter((p) => p.id !== place.id));
    } catch (err) {
      console.error("요청 실패:", err);
    }
  };

  return deleteLikePlace;
}
