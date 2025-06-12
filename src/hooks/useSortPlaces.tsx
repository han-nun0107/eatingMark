import { useContext, useEffect } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";
import { sortPlacesByDistance } from "../utils/loc";

export default function useSortPlaces(): void {
  const { place, lat, lon, setSortPlace } = useContext(EatingMarkContext);

  useEffect(() => {
    if (place.length > 0) {
      const sorted = sortPlacesByDistance(place, lat, lon);
      setSortPlace(sorted);
    }
  }, [lat, lon]);
}
