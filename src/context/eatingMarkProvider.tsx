import { useState, type ReactNode } from "react";
import type { Place } from "../@types/type";
import { EatingMarkContext } from "./eatingMarkContext";

export function EatingMarkProvider({ children }: { children: ReactNode }) {
  const [place, setPlace] = useState<Place[]>([]);
  const [sortPlace, setSortPlace] = useState<Place[]>([]);
  const [likePlace, setLikePlace] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);

  return (
    <EatingMarkContext.Provider
      value={{
        place,
        setPlace,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        sortPlace,
        setSortPlace,
        lat,
        setLat,
        lon,
        setLon,
        likePlace,
        setLikePlace,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </EatingMarkContext.Provider>
  );
}
