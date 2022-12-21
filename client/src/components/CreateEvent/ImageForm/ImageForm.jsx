import React, { useRef } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import "./ImageForm.css";
import FormContainer from "../../Form/FormContainer/FormContainer";
import LabelButton from "../../Button/LabelButton";
import imageUploadPlaceholder from "/public/image_upload_placeholder.jpeg";

const ImageForm = ({ imageFile, setImageFile }) => {
  const imageUploadRef = useRef();

  const handleImageLoading = (e) => {
    const binaryData = [];
    const previewedImage = e.target.files[0];
    binaryData.push(previewedImage);

    if (previewedImage && previewedImage.size > 1e7) {
      toast.error("Oops! The size of image is larger than 10MB.");
      return (e.target.value = null);
    }

    setImageFile((imageFile) => {
      return {
        ...imageFile,
        file: previewedImage,
        filePreview: URL.createObjectURL(new Blob(binaryData)),
      };
    });
  };

  return (
    <FormContainer title="Add an image for event">
      <form>
        <div className="event-line">
          <label className="event-line-title">Wedding Image</label>
          {imageFile.filePreview !== null ? (
            <img
              className="create-form-image-preview"
              src={imageFile.filePreview}
              alt="your wedding image"
            />
          ) : (
            <img
              className="create-form-image-preview-default"
              src={imageUploadPlaceholder}
              alt="upload your wedding image"
              onClick={() => imageUploadRef.current.click()}
            />
          )}
          <div className="create-form-upload-file-button-container">
            <LabelButton label="Select File" htmlFor="file" />
            <input
              ref={imageUploadRef}
              id="file"
              name="file"
              type="file"
              className="create-form-input-photo"
              onChange={handleImageLoading}
              required
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
        </div>
      </form>
    </FormContainer>
  );
};

export default ImageForm;

ImageForm.propTypes = {
  imageFile: PropTypes.object,
  setImageFile: PropTypes.func,
};
