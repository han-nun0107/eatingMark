import Places from "../Places";
import useLikePlacesGet from "../../hooks/useLikePlacesGet";
import LikePlace from "../LikePlace";

export default function IsLoadingFalse() {
  useLikePlacesGet();

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center text-2xl font-bold">
        맛집 목록
      </div>
      <LikePlace />
      <Places />
    </div>
  );
}
