import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useResultContext } from "./useResultContext";
export const useResult = () => {
  const { eventId } = useParams();
  const { result, setResult } = useResultContext();
  const token = JSON.parse(localStorage.getItem("TOKEN"));

  const useGetResult = useFetch(`/event/results/${eventId}`, (result) => {
    setResult(result.result);
  });
  const getResult = () => {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    useGetResult.performFetch(options);
  };

  return {
    getResult: {
      isLoading: useGetResult.isLoading,
      error: useGetResult.error,
      perform: getResult,
      cancel: useGetResult.cancelFetch,
      isSuccess: useGetResult.isSuccess,
    },
    result,
  };
};
