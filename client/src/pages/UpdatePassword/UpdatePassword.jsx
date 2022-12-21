import React from "react";
import { useParams } from "react-router-dom";
import UpdatePasswordForm from "../../components/UpdatePasswordForm/UpdatePasswordForm";

const UpdatePassword = () => {
  const { userId, token } = useParams();
  return (
    <div>
      <UpdatePasswordForm userId={userId} token={token} />
    </div>
  );
};

export default UpdatePassword;
