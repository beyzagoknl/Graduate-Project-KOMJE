import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";

export const useResultContext = () => {
  const context = useContext(ResultContext);

  if (!context) {
    throw Error(
      "useResultContext must be used inside an ResultContextProvider"
    );
  }

  return context;
};
