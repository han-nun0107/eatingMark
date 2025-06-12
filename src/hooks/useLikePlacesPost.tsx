import { useContext } from "react";
import type { Place } from "../@types/type";
import { EatingMarkContext } from "../context/eatingMarkContext";

export default function useLikePlacesPost(): (place: Place) => Promise<void> {
  const { likePlace, setLikePlace } = useContext(EatingMarkContext);

  const likePlacesPost = async (place: Place): Promise<void> => {
    if (likePlace && likePlace.find((p) => p.id === place.id)) return;

    try {
      const response = await fetch("http://localhost:3000/users/places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ place }),
      });

      const data = await response.json();
      if (data.err) {
        setLikePlace([]);
      } else {
        setLikePlace([...likePlace, place]);
      }
    } catch (err) {
      console.error("실패:", err);
    }
  };

  return likePlacesPost;
}
