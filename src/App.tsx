import { useContext } from "react";
import "./App.css";
import { EatingMarkContext } from "./context/eatingMarkContext";
import usePlace from "./hooks/usePlaces";
import IsLoadingTrue from "./component/AppCompo/IsLoadingTrue";
import IsLoadingFalse from "./component/AppCompo/IsLoadingFalse";

function App() {
  const { isLoading } = useContext(EatingMarkContext);

  usePlace();

  return <>{isLoading ? <IsLoadingTrue /> : <IsLoadingFalse />}</>;
}

export default App;
