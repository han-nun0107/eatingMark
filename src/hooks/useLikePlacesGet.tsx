import { useContext, useEffect } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";
import useApi from "./useApi";

export default function useLikePlacesGet() {
  const { setLikePlace } = useContext(EatingMarkContext);
  const { get } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get("http://localhost:3000/users/places");

        if (!data || data.err) {
          setLikePlace([]);
        } else {
          setLikePlace(data.places);
        }
      } catch (err) {
        console.error("요청 실패:", err);
      }
    };

    fetchData();
  }, []);
}
