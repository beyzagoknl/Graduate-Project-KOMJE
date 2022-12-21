import React, { useContext } from "react";
import PropTypes from "prop-types";
import FormContainer from "../../Form/FormContainer/FormContainer";
import { generateLink, copyLink } from "../../../util/utils";
import Button from "../../Button/Button";
import FormInput from "../../Form/FormInput/FormInput";
import "./ShortLinkForm.css";
import { StepperContext } from "../../../contexts/StepperContext";

const ShortLinkForm = ({ shortLink, disabled }) => {
  const { setCompleted } = useContext(StepperContext);

  const onClick = () => {
    copyLink(shortLink);
    setCompleted(true);
  };

  return (
    <FormContainer title="Share the link with your friends">
      <form className="short-link-form">
        <FormInput disabled value={generateLink(shortLink)} />
        <Button
          label="Copy Link"
          type="button"
          disabled={disabled}
          onClick={onClick}
        />
      </form>
    </FormContainer>
  );
};

export default ShortLinkForm;

ShortLinkForm.propTypes = {
  shortLink: PropTypes.string,
  disabled: PropTypes.bool,
};
