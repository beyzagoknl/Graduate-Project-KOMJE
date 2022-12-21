import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEventContext } from "../hooks/useEventContext";
import useFetch from "../hooks/useFetch";

export const useCancelEvent = (eventId) => {
  const { token } = useAuthContext();
  const { setEvent, setEvents } = useEventContext();

  const navigate = useNavigate();

  const onReceived = () => {
    setEvents((events) => events.filter((event) => event._id !== eventId));
    setEvent(null);
    toast.success("You have deleted your invitation successfully!", {
      onClose: () => {
        navigate("/homePage");
      },
    });
  };

  const { isLoading, isSuccess, error, performFetch, cancelFetch } = useFetch(
    `/event/${eventId}`,
    onReceived
  );

  useEffect(() => {
    if (error) {
      toast.error("Oops! Something went wrong. We cannot delete this event.");
    }
  }, [error]);

  const cancelEvent = () => {
    const options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    performFetch(options);
  };

  return {
    isLoading,
    isSuccess,
    error,
    cancelEvent,
    cancelFetch,
  };
};
