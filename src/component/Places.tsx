import { useContext } from "react";
import { EatingMarkContext } from "../context/eatingMarkContext";
import useGeolocation from "../hooks/useGeolocation";
import useSortPlaces from "../hooks/useSortPlaces";
import PlacesErrorTrue from "./PlacesCompo/PlacesErrorTrue";
import PlacesErrorFalse from "./PlacesCompo/PlacesErrorFalse";

export default function Places() {
  const { isError } = useContext(EatingMarkContext);

  useGeolocation();
  useSortPlaces();
  return (
    <>
      {isError ? (
        <PlacesErrorTrue />
      ) : (
        <>
          <PlacesErrorFalse />
        </>
      )}
    </>
  );
}
