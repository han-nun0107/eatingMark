import { useContext, useRef } from "react";
import type { Place } from "../@types/type";
import ModalPortal from "../utils/portal";
import { EatingMarkContext } from "../context/eatingMarkContext";
import useLikePlacesGet from "../hooks/useLikePlacesGet";
import useLikePlacesDelete from "../hooks/useLikePlacesDelete";

export default function LikePlace() {
  const { likePlace, setModalOpen, modalOpen } = useContext(EatingMarkContext);

  const seletedPlace = useRef<Place>(null);

  useLikePlacesGet();

  const deleteLikePlace = useLikePlacesDelete();

  const handleDeleteClick = (place: Place) => {
    deleteLikePlace(place);
    console.log(place.id);
    setModalOpen(false);
  };
  const handleModal = (place: Place) => {
    setModalOpen(true);
    seletedPlace.current = place;
    console.log("modal", place.id);
  };

  return (
    <>
      {modalOpen ? (
        <ModalPortal>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
            <div className="bg-white p-6 rounded-lg">
              <p>삭제하시겠습니까?</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="bg-red-500 text-white w-15 h-8 rounded-lg cursor-pointer"
                  onClick={() => setModalOpen(false)}
                >
                  닫기
                </button>
                <button
                  className="bg-red-500 text-white w-15 h-8 rounded-lg cursor-pointer"
                  onClick={() => handleDeleteClick(seletedPlace.current!)}
                >
                  제거
                </button>
              </div>
            </div>
          </div>
        </ModalPortal>
      ) : (
        ""
      )}

      <div className="bg-white w-[1500px] h-auto rounded-lg shadow-lg p-6 text-2xl">
        <div className="grid grid-cols-5 gap-4">
          {likePlace.map((place: Place) => (
            <div
              key={place.id}
              className="cursor-pointer bg-gray-400 h-[300px] flex flex-col items-center justify-center text-[#1a1a1b] rounded-xl overflow-hidden hover:scale-105 transition-all"
              onClick={() => handleModal(place)}
            >
              <div className="w-full h-[225px]">
                <img
                  src={`http://localhost:3000/${place.image?.src}`}
                  alt={place.image?.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 text-center">
                <h2 className="text-lg font-bold">{place.title}</h2>
                <p className="text-[12px]">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
