import { createContext } from "react";
import type { Place } from "../@types/type";

export const EatingMarkContext = createContext<{
  place: Place[];
  setPlace: React.Dispatch<React.SetStateAction<Place[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  sortPlace: Place[];
  setSortPlace: React.Dispatch<React.SetStateAction<Place[]>>;
  lat: number;
  setLat: React.Dispatch<React.SetStateAction<number>>;
  lon: number;
  setLon: React.Dispatch<React.SetStateAction<number>>;
  likePlace: Place[];
  setLikePlace: React.Dispatch<React.SetStateAction<Place[]>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  place: [],
  setPlace: () => {},
  isLoading: false,
  setIsLoading: () => {},
  isError: false,
  setIsError: () => {},
  sortPlace: [],
  setSortPlace: () => [],
  lat: 0,
  setLat: () => {},
  lon: 0,
  setLon: () => {},
  likePlace: [],
  setLikePlace: () => {},
  modalOpen: false,
  setModalOpen: () => {},
});
