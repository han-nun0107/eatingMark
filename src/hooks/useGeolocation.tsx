import { useContext, useEffect } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";

export default function useGeolocation(): void {
  const { setLat, setLon } = useContext(EatingMarkContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position?.coords?.latitude;
        const lon = position?.coords?.longitude;
        setLat(lat);
        setLon(lon);
      },
      (error: unknown) => {
        console.error("위치 가져오기 실패", error);
      }
    );
  }, []);
}
