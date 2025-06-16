import { useContext } from "react";
import type { Place } from "../../@types/type";
import { EatingMarkContext } from "../../context/eatingMarkContext";
import useLikePlacesPost from "../../hooks/useLikePlacesPost";

export default function PlacesErrorFalse() {
  const { sortPlace } = useContext(EatingMarkContext);

  const likePlacesPost = useLikePlacesPost();

  const handleClick = (place: Place) => {
    likePlacesPost(place);
  };

  return (
    <div className="bg-gray-500 max-w-screen w-full mx-auto rounded-lg shadow-lg p-6 text-2xl">
      <div className="text-center text-white text-3xl font-bold mb-3">맛집</div>
      <div className="grid grid-cols-5 gap-6">
        {sortPlace.map((places: Place) => (
          <div
            key={places.id}
            className="cursor-pointer bg-white h-[300px] flex flex-col items-center justify-center text-[#1a1a1b] rounded-xl overflow-hidden hover:scale-105 transition-all"
            onClick={() => handleClick(places)}
          >
            <div className="w-full h-[225px]">
              <img
                src={`http://localhost:3000/${places.image?.src}`}
                alt={places.image?.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <h2 className="text-lg font-bold">{places.title}</h2>
              <p className="text-[12px]">{places.description}</p>
              <p className="text-xs">
                위치: {places.lat}, {places.lon}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
