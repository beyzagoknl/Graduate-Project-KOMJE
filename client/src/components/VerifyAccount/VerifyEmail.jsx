import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const VerifyEmail = ({ userId, token }) => {
  const [message, setMessage] = useState();
  const route = `/user/${userId}/verify/${token}`;

  const onReceived = (result) => {
    setMessage(result?.message);
  };
  const { isLoading, error, performFetch, cancelFetch, isSuccess } = useFetch(
    route,
    onReceived
  );
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };
    performFetch(options);

    return () => {
      cancelFetch;
    };
  }, []);
  if (error) {
    toast.error(message, {
      toastId: "verify-error",
    });
  }
  if (isSuccess) {
    toast.success(message, {
      toastId: "verify-success",
    });
  }

  return (
    <div>
      <ToastContainer />
      {isLoading && <Spinner />}
    </div>
  );
};
VerifyEmail.propTypes = {
  userId: PropTypes.string,
  token: PropTypes.string,
};
export default VerifyEmail;
